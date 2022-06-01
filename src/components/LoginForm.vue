<template>
  <div class="form-wrapper">
    <div class="form--pre">
      <div class="logo-wrapper">
        <img
          src="https://dashboard.instabug.com/images/Instabug-icon.svg"
          alt="instabug-logo"
        />
      </div>
      <h1>Log in to instabug</h1>
      <div class="social-login-buttons">
        <button class="btn btn--googel">
          <span class="btn__icon">
            <img
              src="../assets/google-icon-logo-svgrepo-com.svg"
              style="width: 24px"
              alt=""
            />
          </span>
          <span class="btn__text"> Googel </span>
        </button>
        <button class="btn btn--githup">
          <span class="btn__icon">
            <img
              src="../assets/github-svgrepo-com.svg"
              style="width: 24px"
              alt=""
            />
          </span>
          <span class="btn__text"> GitHub </span>
        </button>
        <button class="btn btn--microsoft">
          <span class="btn__icon">
            <img
              src="../assets/microsoft-svgrepo-com.svg"
              style="width: 24px"
              alt=""
            />
          </span>
          <span class="btn__text"> Microsoft </span>
        </button>
      </div>
      <span id="divider-line">OR</span>
    </div>

    <form class="form">
      <div class="input-group">
        <label class="input-group__label" for="email"> Work Email </label>
        <input
          id="email"
          class="input-group__input"
          type="text"
          placeholder="you@company.com"
          v-model="email"
        />
      </div>
      <div class="input-group">
        <div class="input-group--pre">
          <label class="input-group__label" for="passwords">Password</label>
          <span class="forget-pass"> Forget Password? </span>
        </div>
        <input
          class="input-group__input"
          id="password"
          type="password"
          placeholder="8+ Characters"
          v-model="password"
        />
      </div>
      <div class="input-group">
        <!-- TODO bind disabled dynamically  -->
        <button class="btn btn--login">Log in</button>
        <div class="input-group--append">
          <p>Don't have an account? <span>Sign up</span></p>
          <p>Login via SSO</p>
        </div>
      </div>
    </form>

    <div class="form--append">
      <div class="trusted-companies">
        <h3 class="trusted-companies__title">Trusted by the top companies.</h3>
        <div class="trusted-companies__wrapper">
          <img src="../assets/lyft-logo.svg" alt="" />
          <img src="../assets/buzzfeed-logo-svgrepo-com.svg" alt="" />
          <img src="../assets/asana-svgrepo-com.svg" alt="" />
          <img src="../assets/oneplus.svg" alt="" />
          <img src="../assets/houseparty.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      loginCredentials: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  padding: 0.4rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 1rem;
  height: 40px;

  &--googel &__text,
  &--githup &__text,
  &--microsoft &__text {
    margin: auto;
  }
  &--login {
    justify-content: center;
    background-color: #00287a;
    color: white;
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
  &--googel {
    color: #fff;
    background-color: #0089e5;
    .btn__icon {
      background-color: #fff;
      padding: 5px 5px;
      border-radius: 4px;
      display: grid;
      place-content: center;
    }
  }
  &--githup {
    color: #fff;
    background-color: #333333;
  }
  &--microsoft {
    border: 1px solid #333;
  }
}

.form-wrapper {
  padding: 0 16px;
  width: 40%;
  margin-left: auto;
}

.social-login-buttons {
  width: 100%;
  padding: 16px 0;
  border-color: rgb(220, 222, 227);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 8px;
}
#divider-line {
  display: inline-block;
  transform: translateY(-10px);
  background-color: #fff;
  padding: 0 10px;
}
.form {
  // border: 1px solid red;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 16px;
  &--pre {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 2rem;
      margin: 16px 0;
      font-weight: 400;
    }
  }
  &--append {
    // border: 1px solid orangered;
    width: 100%;
    .trusted-companies {
      margin: 10px 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      &__title {
        color: #a6a6a6;
        font-weight: 400;
        margin: 5px 0;
      }
      &__wrapper {
        margin: 10px 0;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
.input-group {
  // border: 1px solid red;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  &--pre {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    .input-group__label {
      margin-bottom: 0;
    }
    .forget-pass {
      color: #a6a6a6;
      font-size: 13px;
    }
  }
  &--append {
    display: flex;
    flex-flow: rew nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    span,
    p:last-of-type {
      color: #0089e5;
      cursor: pointer;
    }
  }
  &__label {
    margin-bottom: 6px;
    font-size: 14px;
  }
  &__input {
    padding: 8px 16px;
    height: 40px;
    border-radius: 4px;
    display: block;
    box-sizing: border-box;
    outline: 0;
    border: 1px solid #dcdee3;
    &:focus {
      border-color: #09f;
      box-shadow: inset 0 0 4px 0 #09f;
    }
    &::placeholder {
      color: #a6a6a6;
      font-size: 13px;
    }
  }
}
</style>
