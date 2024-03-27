describe('login page', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	//からフォームが送信されたとき
	context('login form', () => {
		//
		it('should display error when text field is empty', () => {
			cy.getByData('login-submit').click();
			cy.getByData('error-login-email').should('have.text', '必須項目です');
			cy.getByData('error-login-password').should('have.text', '必須項目です');
		});
		it('should display error when email is invalid', () => {
			cy.getByData('login-email').type('invalid-email');
			cy.getByData('login-submit').click();
			cy.getByData('error-login-email').should('have.text', '無効なメールアドレスです');
		},);
		it('should display error when password is less than 8 characters', () => {
			cy.getByData('login-password').type('pass');
			cy.getByData('login-submit').click();
			cy.getByData('error-login-password').should('have.text', 'パスワードは8文字以上で入力してください');
		});
		it('should display no error when all fields are valid', () => {
			cy.getByData('login-email').type('sample@example.com');
			cy.getByData('login-password').type('password');
			cy.getByData('login-submit').click();
			cy.getByData('error-login-email').should('not.visible');
			cy.getByData('error-login-password').should('not.visible');
			//url の変更を見る
		});
	});
});
