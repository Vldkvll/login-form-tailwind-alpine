export default () => {
  return {
    // pass: this,
    myMethod() {
      this.open = true;
      console.log(`this myMethod`, this.$refs.foo);
      this.$nextTick(() => {
        this.$refs.form.focus();
      });
    },
    confirmPassword() {
      this.valid = false;
      // console.log(`this.$el >>>>> confirmPassword`, this.$el);
      // console.log(`this.$el validity >>>>> confirmPassword`, this.$el.validity);
      // console.log(
      //   `this.$refs validity >>>>> confirmPassword`,
      //   this.$refs.validity
      // );
      this.$nextTick(() => {
        // console.log(`this nextTick confirmPassword`, this.$refs.form);
        // console.log(
        //   `his.$refs.form.checkValidity confirmPassword`,
        //   this.$refs.form.checkValidity()
        // );
        // this.$refs.form.focus();
      });
    },

    disableUnDisable() {
      if (this.$refs.form) {
        console.log(
          "disableUnDisable ~ his.$refs.form.checkValidity()",
          !this.$refs.form.checkValidity(),
          this.$refs.form
        );
        return !this.$refs.form.checkValidity();
      } else if (this.$el.form) {
        return !this.$el.form.checkValidity();
      }
    },
    checkConfirmPassword(password, passwordConfirm) {
      console.log(
        `this.$el.form.checkValidity()`,
        this.$el.form.checkValidity()
      );
      console.log(`object`, this.$el.form);
      // console.log(
      //   `his.$refs.form.checkValidity --->> checkConfirmPassword`,
      //   "this.$refs.form.checkValidity()",
      //   this.$refs.form.checkValidity(),
      //   "$el",
      //   this.$el,
      //   password,
      //   passwordConfirm
      // );

      if (password != passwordConfirm) {
        console.log(`object`, this.$el);
        // return this.$el.setCustomValidity("Your passwords do not match");
        // return this.$el.setCustomValidity("Your passwords do not match");
        this.$nextTick(() => {
          this.$el.setCustomValidity("Your passwords do not match");
        });
      } else {
        this.$el.setCustomValidity("");
        // this.disableUnDisable();
      }
      //   this.$refs.form.checkValidity()=false;
    },
  };
};
