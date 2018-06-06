const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = (app) => { 
    app.post ('/ api / send', function (req, res, next) {
        const infoSolicitud = {
            methods: {
                sendEmail(info){
                    sendgrid.send({
                        to: 'info.gravith@gmail.com',
                        from: 'info.gravith@gmail.com',
                        subject: 'Solicitud de Servicio Gravith',
                        text: this.info
                    }, function(err, json) {
                        if (err) { return this.$root.$emit('sendEmail', { message: 'Error en enviar solicitud' })}
                        this.$root.$emit('sendEmail', { message: 'Solicitud enviada' })
                    });
                }
            }
        }
    }); 
};


export default infoSolicitud;
