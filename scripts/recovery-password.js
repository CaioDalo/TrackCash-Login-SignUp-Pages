function recoveryPassword() {
    const popupRecovery = window.matchMedia("(max-width: 768px)")

    if (popupRecovery.matches) {
        window.location.href = '../pages/recovery-password.html'
    } else {
        window.open('../pages/recovery-password.html', 'recovery', "width=500, height=450, left=" + (screen.width - 500) + ", top=" + (screen.height - 600) / 2, "scrollbars=no")
    }

    return popupRecovery
}

function successScreenSize(popupSuccess) {

    if (popupSuccess.matches) {
        document.location.href = './recover-success.html'
        console.log('ok ok')
    } else {
        window.open('./recover-success.html', 'success', "width=500, height=450, left=" + (screen.width - 500) + ", top=" + (screen.height - 600) / 2, "scrollbars=no")
    }
}

function validationEmail() {
    const email = document.querySelector('.recovery-email')
    const simbolValidation = "@"

    if (email.value === "" | email.value.indexOf(simbolValidation) == -1) {
        window.alert('Insira um email válido!')
    } else {
        const popupSuccess = window.matchMedia("(max-width: 768px)")

        successScreenSize(popupSuccess)
        popupSuccess.addEventListener(successScreenSize)
    }
}

function closePopup() {
    window.close()
}


recoveryPassword(popupRecovery)
popupRecovery.addEventListener(popupRecovery)
