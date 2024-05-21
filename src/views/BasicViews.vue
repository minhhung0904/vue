<!-- <template>
  <div>
    <h1>Login API Example</h1>

    <form @submit="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" id="username" name="username"><br><br>

      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" name="password"><br><br>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';


export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();

      try {
        // const response = await axios.post('http://localhost:10303/auth/login', {
        //   user: 'hungtvm',
        //   password: 'coicute0904'
        // });
        const response = await axios({
          method : 'post', 
          url : 'http://localhost:10303/auth/login', 
          data : {
            user: 'hungtvm',
            password: 'coicute0904'
          } ,
          withCredentials: true   })

        const as = this.$cookies.get('as')
        const cookies = document.cookie;
        console.log(cookies)
        const data = response.data;
        console.log(data);
        const accessToken = 'Bearer ' + data.data.access_token;

        const socket = io('http://127.0.0.1:10302', {
          extraHeaders: {
            Cookie: cookies,
          },
          query: { 
            authorization: accessToken,
            as, 
          },
        },);


        socket.on('connect', () => {
          console.log('Socket connected');
          socket.emit('exampleEvent', { message: 'Hello, server!' });
        });

        socket.on('exampleEvent', data => {
          console.log('Received message from server:', data.message);
        });

        socket.on('disconnect', () => {
          console.log('Socket disconnected');
        });
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};
</script> -->

<!-- <template>
  <div>
    <button @click="verifyRecaptcha">Xác thực reCAPTCHA</button>
  </div>
</template>

<script >
import axios from 'axios';
export default {
  
  mounted() {
    // Tải script reCAPTCHA từ Google
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LeonZkhAAAAAFHdxxGQ4XQAReuQO2T_TXr2vh8S';
    document.head.appendChild(script);
  },
  methods: {
    verifyRecaptcha() {
      // Gọi API xác thực reCAPTCHA v3
      // eslint-disable-next-line no-undef
      grecaptcha.ready(() => {
        // eslint-disable-next-line no-undef
        grecaptcha.execute('6LeonZkhAAAAAFHdxxGQ4XQAReuQO2T_TXr2vh8S', { action: 'login' })
          .then((token) => {
            console.log(token)
            // Gửi token đến server để xác thực
            this.sendTokenToServer(token);
          })
          .catch((error) => {
            console.error('Lỗi khi xác thực reCAPTCHA:', error);
          });
      });
    },
    
    sendTokenToServer(token) {
      // Gửi token đến server để xác thực
      // Sử dụng thư viện HTTP hoặc fetch API để gửi yêu cầu POST đến server
      // Ví dụ sử dụng Axios:
      axios.post('/verify-recaptcha', { token })
        .then((response) => {
          console.log('Kết quả xác thực reCAPTCHA:', response.data);
        })
        .catch((error) => {
          console.error('Lỗi khi gửi token đến server:', error);
        });
    },
  },
};
</script> -->

<template>
  <div>
    <iframe id="cardinal_collection_iframe" name="collectionIframe" height="10" width="10" style="display: none;"></iframe>
    <form ref="cardinal_collection_form" method="POST" target="collectionIframe" :action="deviceDataCollectionUrl">
      <input type="hidden" name="JWT" :value="jwtToken">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceDataCollectionUrl: 'https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect',
      jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZjg5MGI1YS1hMmEwLTQzYjUtOTE1Yy1iZDRlZWZiNTYzZGEiLCJpYXQiOjE3MTYyNzkzMzgsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTcxNjI4MjkzOCwiT3JnVW5pdElkIjoiNjY0MmNiYmFkNWQ3NWIxNjlhNGJmZWE2IiwiUmVmZXJlbmNlSWQiOiJmNmY3N2Y2OC1mOGIxLTRmNjktYWMyZC1mOGM1MmExYjViNTkifQ.Xyik0IeicEn4zZG_s4fMBIiX7JeP0L4o5VbMJ_V9GA4',
    };
  },
  mounted() {
    console.log('start')
    const cardinalCollectionForm = this.$refs.cardinal_collection_form;
    if (cardinalCollectionForm) {
      cardinalCollectionForm.submit();
    }

    window.addEventListener("message", this.handleDeviceDataResponse, false);
  },
  beforeUnmount() {
    window.removeEventListener("message", this.handleDeviceDataResponse, false);
  },
  methods: {
    handleDeviceDataResponse(event) {
      if (event.origin === "https://centinelapistag.cardinalcommerce.com") {
        const responseData = JSON.parse(event.data);
        console.log(responseData);
      }
    },
  },
};
</script>