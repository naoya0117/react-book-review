import { User, LoginDTO, SignUpDTO, login, getUser, signUp } from '@/features/auth';
import storage from '@/utils/storage';
import { useState, createContext, useEffect, useContext } from 'react';

type Auth = {
    user: User | null;
    login: (data: LoginDTO) => Promise<Record<string, unknown>>;
    signUp: (data: SignUpDTO) => Promise<Record<string, unknown>>;
    logout: () => void;
};

const AuthContext = createContext<Auth>({
    user: null,
    login: async () => ({}),
    signUp: async () => ({}),
    logout: () => {},
});

// トークンを含む型を定義
type ResponseIncludeToken = {
    token: string;
} & Record<string, unknown>;

// トーケンを取得して残りのレスポンスを返す
const storeToken = async (response: ResponseIncludeToken) => {
    const { token, ...rest } = response;

    //ローカルストレージにトークンを保存
    storage.setToken(token);
    return rest;
};

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    // ログイン済みの場合、ユーザー情報を取得
    useEffect(() => {
        const token = storage.getToken();

        if (!token) {
            return;
        }
        const fetchUser = async () => {
            const user = await getUser();
            setUser(user);
        };

        fetchUser();
    }, []);

    const loginFn = async (data: LoginDTO) => {
        const res = await login(data);
        return storeToken(res);
    };

    const signUpFn = async (data: SignUpDTO) => {
        const res = await signUp(data);
        return storeToken(res);
    };

    const logoutFn = () => {
        storage.clearToken();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user: user, login: loginFn, signUp: signUpFn, logout: logoutFn }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
