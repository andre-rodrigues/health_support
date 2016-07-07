class ApplicationMailer < ActionMailer::Base
  layout false

  def home_contact(name, email, specialty, message)
    @name = name
    @email = email
    @specialty = specialty
    @message = message
    mail(to: 'a.andremr@gmail.com', from: 'suporte@healthsupport.com.br', subject: 'Contato de usuário Health Support')
    # TODO: trocar to: para contato@healthsupport.com.br
  end
end
