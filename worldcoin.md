## Worldcoin

##### https://github.com/mansijoshi17/karmaperks/blob/master/src/components/header/Header.js

```
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

  const handleProof = (result) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 3000);
      // NOTE: Example of how to decline the verification request and show an error message to the user
    });
  };

  const onSuccess = (result) => {
     login();
  };

  const urlParams = new URLSearchParams(window.location.search);
  const credential_types = urlParams.get("credential_types")?.split(",") ?? [
    CredentialType.Orb,
    CredentialType.Phone,
  ];

  const action = urlParams.get("action") ?? "";
  const app_id = urlParams.get("app_id") ?? "wid_staging_1234";


<IDKitWidget
                action={action}
                signal="my_signal"
                onSuccess={onSuccess}
                handleVerify={handleProof}
                app_id={app_id}
                credential_types={credential_types}
                // walletConnectProjectId="get_this_from_walletconnect_portal"
              >
                {({ open }) => (
                  <button
                    onClick={open}
                    className="sign-btn"
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "flex",
                        md: "flex",
                        flexDirection: "row-reverse",
                      },
                    }}
                  >
                    Sign In With Worldcoin
                  </button>
                )}
              </IDKitWidget>

```
