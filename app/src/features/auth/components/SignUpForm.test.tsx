import { SignUpForm } from './SignUpForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('SignUpForm', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignUpForm />
            </BrowserRouter>
        );
    });

    it('should render the form', () => {
        expect(screen.getByTestId('signup-name')).toBeInTheDocument();
        expect(screen.getByTestId('signup-email')).toBeInTheDocument();
        expect(screen.getByTestId('signup-password')).toBeInTheDocument();
        expect(screen.getByTestId('signup-confirm')).toBeInTheDocument();
        expect(screen.getByTestId('signup-submit')).toBeInTheDocument();
    });

    it('should reject empty form', () => {
        screen.getByTestId('signup-submit').click();

        waitFor(() => {
            expect(screen.getByTestId('error-signup-name')).toHaveTextContent('必須項目です');
            expect(screen.getByTestId('error-signup-email')).toHaveTextContent('必須項目です');
            expect(screen.getByTestId('error-signup-password')).toHaveTextContent('必須項目です');
            expect(screen.getByTestId('error-signup-confirm')).toHaveTextContent('必須項目です');
        });
    });

    it('should reject invalid name', () => {
        userEvent.type(screen.getByTestId('signup-name'), 'a');
        screen.getByTestId('signup-submit').click();

        waitFor(() => {
            expect(screen.getByTestId('error-signup-name')).toHaveTextContent(
                '名前は2文字以上で入力してください'
            );
        });

        userEvent.clear(screen.getByTestId('signup-name'));
        userEvent.type(screen.getByTestId('signup-name'), 'a'.repeat(33));
        screen.getByTestId('signup-submit').click();

        waitFor(() => {
            expect(screen.getByTestId('error-signup-name')).toHaveTextContent(
                '名前は32文字以下で入力してください'
            );
        });
    });

    it('should reject invalid email', () => {
        userEvent.type(screen.getByTestId('signup-email'), 'invalid-email');
        screen.getByTestId('signup-submit').click();

        waitFor(() => {
            expect(screen.getByTestId('error-signup-email')).toHaveTextContent(
                '無効なメールアドレスです'
            );
        });
    });

    it('should reject short password', () => {
        userEvent.type(screen.getByTestId('signup-password'), 'short');
        screen.getByTestId('signup-submit').click();

        waitFor(() => {
            expect(screen.getByTestId('error-signup-password')).toHaveTextContent(
                'パスワードは8文字以上で入力してください'
            );
        });
    });

    it('should reject mismatched password', () => {
        userEvent.type(screen.getByTestId('signup-password'), 'password');
        userEvent.type(screen.getByTestId('signup-confirm'), 'mismatch');
        screen.getByTestId('signup-submit').click();

        waitFor(
            () => {
                expect(screen.getByTestId('error-signup-confirm')).toHaveTextContent(
                    'パスワードが一致しません'
                );
            },
            { timeout: 1000 }
        );
    });
});
