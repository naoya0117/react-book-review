import { LoginForm } from '../LoginForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('LoginForm', () => {
    it('should render the component', () => {
        render(<LoginForm />);
        expect(screen.getByTestId('login-email')).toBeInTheDocument();
        expect(screen.getByTestId('login-password')).toBeInTheDocument();
        expect(screen.getByTestId('login-submit')).toBeInTheDocument();
    });

    it('should reject empty form', async () => {
        render(<LoginForm />);

        screen.getByTestId('login-submit').click();

        await waitFor(() => {
            expect(screen.getByTestId('error-login-email')).toHaveTextContent('必須項目です');
            expect(screen.getByTestId('error-login-password')).toHaveTextContent('必須項目です');
        });
    });

    it('should reject invalid email', async () => {
        render(<LoginForm />);

        userEvent.type(screen.getByTestId('login-email'), 'invalid-email');
        screen.getByTestId('login-submit').click();

        await waitFor(() => {
            expect(screen.getByTestId('error-login-email')).toHaveTextContent(
                '無効なメールアドレスです'
            );
        });
    });

    it('should reject short password', async () => {
        render(<LoginForm />);

        userEvent.type(screen.getByTestId('login-password'), 'short');
        screen.getByTestId('login-submit').click();

        await waitFor(() => {
            expect(screen.getByTestId('error-login-password')).toHaveTextContent(
                'パスワードは8文字以上で入力してください'
            );
        });
    });

    it('should accept valid form', async () => {
        render(<LoginForm />);

        await act(async () => {
            userEvent.type(screen.getByTestId('login-email'), 'test@example.com');
            userEvent.type(screen.getByTestId('login-password'), 'password');

            await waitFor(() => {
                screen.getByTestId('login-submit').click();
            });

            await waitFor(() => {
                expect(screen.queryByTestId('error-login-email')).toHaveTextContent('');
                expect(screen.queryByTestId('error-login-password')).toHaveTextContent('');
            });
        });
    });
});
