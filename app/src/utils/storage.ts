const storagePrefix = 'book_review_';

const storage = {
    // トークンの取得
    getToken: () => {
        return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
    },
    // トークンの設定
    setToken: (token: string) => {
        window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(`Bearer ${token}`));
    },
    // トークンの削除
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}token`);
    },
};

export default storage;
