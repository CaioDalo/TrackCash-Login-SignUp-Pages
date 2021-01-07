function recoveryPassword() {
    const popupRecovery = window.open('./pages/recovery-password.html', 'recovery', "width=350, height=450, left=" + (screen.width - 500) + ", top=" + (screen.height - 600) / 2, "scrollbars=no")

    return popupRecovery
}

function validationEmail() {
    const email = document.querySelector('.recovery-email')
    const simbolValidation = "@"

    if (email.value === "" | email.value.indexOf(simbolValidation) == -1) {
        window.alert('Insira um email válido!')
    } else {
        (window.open('./recover-success.html', 'success', "width=350, height=450, left=" + (screen.width - 500) + ", top=" + (screen.height - 600) / 2, "scrollbars=no"))
    }
}

function closePopup() {
    window.close()
}