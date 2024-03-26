import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserIconForm } from '../UserIconForm';
import { act } from 'react-dom/test-utils';

describe('UserIconForm', () => {
    beforeAll(() => {
        global.URL.createObjectURL = jest.fn();
    });

    beforeEach(() => {
        render(<UserIconForm />);
    });

    it('should render the form', () => {
        expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    });

    it('empty avatar should show error', async () => {
        screen.getByTestId('user-icon-submit').click();

        await waitFor(() => {
            expect(screen.getByTestId('error-user-icon')).toHaveTextContent(
                'ファイルを選択してください'
            );
        });
    });

    it('invalid file type should show error', async () => {
        const file = new File(['text'], 'text.txt', { type: 'text/plain' });
        const input = screen.getByTestId('user-icon');

        userEvent.upload(input, file);

        await waitFor(() => {
            screen.getByTestId('user-icon-submit').click();
        });

        await waitFor(() => {
            expect(screen.getByTestId('error-user-icon')).toHaveTextContent(
                'PNGまたはJPEG形式の画像を選択してください'
            );
        });
    });

    it('valid file should submit', async () => {
        const file = new File(['image'], 'image.png', { type: 'image/png' });
        const input = screen.getByTestId('user-icon');

        await act(async () => {
            userEvent.upload(input, file);

            await waitFor(() => {
                screen.getByTestId('user-icon-submit').click();
            });

            await waitFor(() => {
                expect(screen.queryByTestId('error-user-icon')).toHaveTextContent('');
            });
        });
    });
});
