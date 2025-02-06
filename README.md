# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

'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ppp'












```import axios from 'axios';
import 'dotenv/config'
import { SocksProxyAgent } from 'socks-proxy-agent';

export const prxoyagent = new SocksProxyAgent('socks://cloudproxy.adani.com:8080', {
  keepAlive: true,
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED=0

export const AxItPortal = axios.create({
  withCredentials: true,
  timeout: 20 * 1000, // 20 seconds
  // httpAgent: prxoyagent,
        proxy: {
                protocol:"http",
                host:"cloudproxy.adani.com",
                port:8080
        }
});

async function preLogin(pan) {

  try {
    const reqBody = {
      entity: pan,
      serviceName: "wLoginService",
    }

    const { data: preLoginresp, headers: preLoginheaders } = await AxItPortal.post(`https://eportal.incometax.gov.in/iec/loginapi/login`,
      JSON.stringify(reqBody)
      , {
        headers: {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/json",
          "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sn": "wLoginService",
          "Referer": "https://eportal.incometax.gov.in/iec/foservices/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
      }
    )


    console.log("preLoginresp", preLoginresp)

    await AxItPortal.get(`https://services.gst.gov.in/services/captcha`, {
      params: {
        rnd: Math.random()
      },
      headers: {
        'Referer': `https://services.gst.gov.in/services/login`,
      },
      decompress: false,
      // Ref: https://stackoverflow.com/a/61621094/4050261
      responseType: 'arraybuffer',
    })

    console.log("gst successfull")


    await AxItPortal.get(`https://www.tdscpc.gov.in/app/login.xhtml`, {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
        family:4
    })

    console.log("tds successfull")

  } catch (error) {
    console.log(error.message)
  }

}



preLogin("EFMPK9981P") ```
