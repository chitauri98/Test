const components = {};
components.loginScreen = `
<div class="hero">
      <div class="form-box">
        <div class="button-box">
          <div id="btn"></div>
          <button type="button" class="toggle-btn1" onclick="">
            Login
          </button>
          <button type="button" class="toggle-btn" onclick="">
            Register
          </button>
        </div>
        <div class="social-icons">
          <img src="../Images/fb.png" />
          <img src="../Images/tw.png" />
          <img src="../Images/gp.png" />
        </div>
        <form id="login" class="input-group">
          <div class="error">
            <input
              type="text"
              class="input-field"
              placeholder="Email"
              name="email"
              required
            />
            <div class="email-error"></div>
          </div>
          <div class="error">
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            name="password"
            required
          />
          <div class="error"></div>
          </div>
          <input type="checkbox" class="check-box" /><span
            >Remember Password</span
          >
          <button type="submit" class="submit-btn">Login</button>
        </form>
        <form id="register" class="input-group">
            <div class="error">
          <input
            type="text"
            class="input-field"
            placeholder="Input Your Name"
            name="registerName"
            required
          />
          <div class="name-error"></div>
          </div>
          <div class="error">
          <input
            type="email"
            class="input-field"
            placeholder="Email Id"
            name="registerEmail"
            required
          />
          <div class="email-error"></div>
          </div>
          <div class="error">
          <input
            type="password"
            class="input-field"
            placeholder="Enter Password"
            name="registerPassword"
            required
          />
          <div class="password-error"></div>
          </div>
          <div class="error">
            <input
              type="password"
              class="input-field"
              placeholder="Confirm Password"
              name="registerConfirmPassword"
              required
            />
            <div class="confirm-password-error"></div>
            </div>
          <input type="checkbox" class="check-box" /><span
            >Hiphop Never Die</span
          >
          <button type="submit" class="submit-btn">Register</button>
        </form>
      </div>
    </div>
`;
