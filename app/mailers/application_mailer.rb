class ApplicationMailer < ActionMailer::Base
  layout false

  def home_contact(name, email, specialty, message)
    @name = name
    @email = email
    @specialty = specialty
    @message = message

    mail(
      to: 'contato@healthsupport.com.br',
      from: 'contato@healthsupport.com.br',
      subject: 'Contato de usuário Health Support'
    )
  end
end
