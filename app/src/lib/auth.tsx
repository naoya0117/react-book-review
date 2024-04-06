import { User, LoginDTO, SignUpDTO, login, getUser, signUp } from '@/features/auth';
import storage from '@/utils/storage';
import { useState, createContext, useEffect, useContext } from 'react';

type Auth = {
    user: User | null;
    refetchUser: () => void;
    login: (data: LoginDTO) => Promise<Record<string, unknown>>;
    signUp: (data: SignUpDTO) => Promise<Record<string, unknown>>;
    logout: () => void;
};

const AuthContext = createContext<Auth>({
    user: null,
    refetchUser: async () => {},
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
    const [loading, setLoading] = useState(true);

    // ユーザー情報を取得
    const fetchUser = async () => {
        setLoading(true);

        //ローカルストレージからトークンを取得
        const token = storage.getToken();

        // トークンがない場合、ユーザー情報を消去
        if (!token) {
            setUser(null);
            setLoading(false);
            return;
        }

        // ユーザー情報を取得
        const user = await getUser();
        setUser(user);
        setLoading(false);
    };

    // レンダリング時にユーザー情報を取得
    useEffect(() => {
        // ユーザー情報を取得
        fetchUser().catch(() => {
            // ログイン済みのトークンが無効な場合、トークンを削除
            storage.clearToken();
            setLoading(false);
        });
    }, []);

    if (loading) {
        return null;
    }

    const loginFn = async (data: LoginDTO) => {
        const res = await login(data);
        // ユーザ情報を取得
        fetchUser();
        return storeToken(res);
    };

    const signUpFn = async (data: SignUpDTO) => {
        const res = await signUp(data);
        // ユーザ情報を取得
        fetchUser();
        return storeToken(res);
    };

    const logoutFn = () => {
        storage.clearToken();
        // ユーザ情報をクリア
        fetchUser();
    };

    return (
        <AuthContext.Provider
            value={{
                user: user,
                refetchUser: fetchUser,
                login: loginFn,
                signUp: signUpFn,
                logout: logoutFn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
