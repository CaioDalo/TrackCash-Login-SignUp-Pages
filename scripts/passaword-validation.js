function newpasswordValidation() {
    const newPassword = document.querySelector('.newPassword')
    const newPasswordAgain = document.querySelector('.newPasswordAgain')

    if (newPassword.value.length < 8) {
        window.alert('A senha deve conter no mínimo 8 caracteres!')
    } else {
        if (newPassword.value !== newPasswordAgain.value) {
            window.alert('Os dois campos devem ser iguais!')
        } else {
            window.alert('Senha alterada com sucesso !')
        }
    }
}

function passwordValidation() {
    const password = document.querySelector('.password')
    const passwordAgain = document.querySelector('.passwordAgain')

    if (password.value.length < 8) {
        window.alert('A senha deve conter no mínimo 8 caracteres!')
    } else {
        if (password.value !== passwordAgain.value) {
            window.alert('Os dois campos de senha devem ser iguais!')
        } else {
            window.alert('Cadastro realizado com sucesso !')
        }
    }
}