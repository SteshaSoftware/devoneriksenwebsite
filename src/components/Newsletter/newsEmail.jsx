import React, { useEffect } from 'react';
import "./newsletter.css";

const NewsEmail = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
    function ml_webform_success_5893372() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-5893372 .row-success').show();
      $('.ml-subscribe-form-5893372 .row-form').hide();
    }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
    fetch("https://assets.mailerlite.com/jsonp/484425/forms/91698913071859393/takel")
      `;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v1f25ee4b05f240a833e02c19975434a4";
    script3.type = "text/javascript";
    document.body.appendChild(script3);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
    };
  }, []);

  return (
    <>
      <div>
        {/* Add the div content here */}
        <div id="mlb2-5893372" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5893372">
          <div class="ml-form-align-center ">
            <div class="ml-form-embedWrapper embedForm">
              <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <div class="ml-form-embedContent">
                  <h4>Subscribe for Book Updates</h4>
                  {/* <p style={{ textAlign: "center" }}>Signup for release date updates and news <br /></p> */}
                </div>
                <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/484425/forms/91698913071859393/subscribe" data-code="" method="post" target="_blank">
                  <div class="ml-form-formContent">
                    <div class="ml-form-fieldRow ml-last-item">
                      <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" />
                      </div>
                    </div>
                  </div>
                  <div class="ml-form-checkboxRow ml-validate-required">
                    <label class="checkbox">
                      <input type="checkbox" />
                      <div class="label-description">
                        <p><span style={{color: "rgb(246, 246, 246)"}}>Opt in to receive news and updates.</span></p>
                      </div>
                    </label>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div class="ml-form-embedSubmit">

                    <button type="submit" class="primary">Subscribe Now</button>

                    <button disabled="disabled" style={{ display: "none" }} type="button" class="loading">
                      <div class="ml-form-embedSubmitLoad"></div>
                      <span class="sr-only">Loading...</span>
                    </button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              </div>
              <div class="ml-form-successBody row-success" style={{ display: "none" }}>
                <div class="ml-form-successContent">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsEmail;
