describe('signup page', () => {
	beforeEach(() => {
		cy.visit('/signup');
	});

	context('signup form', () => {
		it('should display error when text field is empty', () => {
			cy.getByData('signup-submit').click();
			cy.getByData('error-signup-email').should('have.text', '必須項目です');
			cy.getByData('error-signup-password').should('have.text', '必須項目です');
			cy.getByData('error-signup-confirm').should('have.text', '必須項目です');
		});
		it('should display error when email is invalid', () => {
			cy.getByData('signup-email').type('invalid-email');
			cy.getByData('signup-submit').click();
			cy.getByData('error-signup-email').should('have.text', '無効なメールアドレスです');
		},);
		it('should display error when password is less than 8 characters', () => {
			cy.getByData('signup-password').type('pass');
			cy.getByData('signup-submit').click();
			cy.getByData('error-signup-password').should('have.text', 'パスワードは8文字以上で入力してください');
		});
		it('should display error when password and confirm do not match', () => {
			cy.getByData('signup-password').type('password');
			cy.getByData('signup-confirm').type('different-password');
			cy.getByData('signup-submit').click();
			cy.getByData('error-signup-confirm').should('have.text', 'パスワードが一致しません');
		});

		it('should display no error when all fields are valid', () => {
			cy.getByData('signup-email').type('sample@example.com');
			cy.getByData('signup-password').type('password');
			cy.getByData('signup-confirm').type('password');
			cy.getByData('signup-submit').click();
			cy.getByData('error-signup-email').should('not.visible');
			cy.getByData('error-signup-password').should('not.visible');
			cy.getByData('error-signup-confirm').should('not.visible');
		});
	});
});
