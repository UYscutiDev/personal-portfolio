import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailChimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAOLCHIMP_URL}?u=${process.env.REACT_APP_MAOLCHIMP_U}$id=${process.env.REACT_APP_MAOLCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => {
          <Newsletter
            status={status}
            message={message}
            onValidated={FormData=> subscribe(FormData)}
          />
        }}
      />
    </>
  )
}