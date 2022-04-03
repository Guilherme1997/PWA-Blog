if ('serviceWork' in navigator) {
    navigator.serviceWork.register('/sw.js')
        .then(function (registration) {
            console.log("ServiceWork registrado com sucesso no escopo",
                registration.scope), function (error) {
                    console.log("Falha ao registrar o serviceWork" + error)
                };
        })
}