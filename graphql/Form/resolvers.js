const FormData = require("../../models/FormData");

module.exports = {
  Mutation: {
    submitForm: async (parent, args) => {
      try {
        const formData = new FormData(args);
        await formData.save();
        return { success: true, message: "Form submitted successfully" };
      } catch (err) {
        console.error(err);
        return { success: false, message: "Form submission failed" };
      }
    },
  },
};
