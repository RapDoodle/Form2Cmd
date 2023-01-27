const blueprint = {
  meta: {
    title: "Demo GUI",
    apiVersion: "0.1.0"
  },
  command: {
    prefix: "executable",
    suffix: "",
    separator: " "
  },
  form: [
    {
      type: "fieldset",
      title: "Text Fields",
      form: [
        {
          type: "text",
          label: "Text field",
          help: "Some help message",
          command: {
            order: 1,
            type: "str",
            arg: "--tf1",
          },
        },
        {
          type: "text",
          label: "Field with default message",
          help: "Some help message",
          required: true,
          default: "Some default text",
          command: {
            order: 1,
            type: "str",
            arg: "--tf2",
          },
        },
        {
          type: "text",
          label: "Field with placeholder",
          help: "Some help message",
          placeholder: "Placeholder text",
          command: {
            order: 1,
            type: "str",
            arg: "--tf3",
          },
        },
        {
          type: "text",
          label: "Required field",
          help: "Some help message",
          required: true,
          placeholder: "You must type something here",
          command: {
            order: 1,
            type: "str",
            arg: "--tf4",
          },
        },
        {
          type: "text",
          label: "Disabled field",
          help: "Some help message",
          disabled: true,
          placeholder: "You can not change the content",
          default: "Unchangeable content",
          command: {
            order: 1,
            type: "str",
            arg: "--disabled-field",
          },
        },
        {
          type: "text",
          label: "Disabled and ignored field",
          help: "Some help message",
          disabled: true,
          placeholder: "Excluded in the output",
          default: "Unchangeable content",
          command: {
            ignoreOnDisabled: true,
            order: 1,
            type: "str",
            arg: "--disabled-field-2",
          },
        },
        {
          type: "password",
          label: "Password field",
          placeholder: "Password",
          help: "Your password",
          command: {
            order: 2,
            type: "str",
            arg: "-p",
          },
        },
        {
          type: "email",
          label: "Email field",
          placeholder: "Email address",
          help: "Your email address",
          required: false,
          default: "user@example.com",
          command: {
            order: 3,
            type: "str",
            arg: "--email",
          },
        },
        {
          type: "url",
          label: "URL field",
          placeholder: "URL",
          help: "Some URL",
          required: false,
          default: "https://www.google.com",
          command: {
            order: 4,
            type: "str",
            arg: "--url",
          },
        },
        {
          type: "date",
          label: "Date field",
          help: "Some date",
          required: false,
          command: {
            order: 5,
            type: "str",
            arg: "--date",
          },
        }
      ],
    },
    {
      type: "fieldset",
      title: "Selects",
      form: [
        {
          type: "select",
          label: "Select field",
          help: "Some help message",
          options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5"
          ],
          command: {
            order: 10,
            type: "str",
            arg: "--option1",
          },
        },
        {
          type: "select",
          label: "Required select",
          help: "Some help message",
          required: true,
          options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5"
          ],
          command: {
            order: 10,
            type: "str",
            arg: "--option2",
          },
        },
        {
          type: "select",
          label: "Select with default option",
          help: "Some help message",
          options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
            "Option 5"
          ],
          default: "Option 2",
          command: {
            order: 10,
            type: "str",
            arg: "--option3",
          },
        },
        {
          type: "select",
          label: "Select with different value/text pair",
          help: "Some help message",
          options: [
            {
              value: "opt_1",
              text: "Option 1"
            },
            {
              value: "opt_2",
              text: "Option 2"
            },
            {
              value: "opt_3",
              text: "Option 3"
            },
            {
              value: "opt_4",
              text: "Option 4"
            },
            {
              value: "opt_5",
              text: "Option 5"
            }
          ],
          default: "opt_3",
          command: {
            order: 10,
            type: "str",
            arg: "--option4",
          },
        }
      ],
    },
    {
      type: "fieldset",
      title: "Radios",
      form: [
        {
          type: "radioGroup",
          label: "Radio field",
          help: "Choose an option",
          options: ["Option 1", "Option 2", "Option 3"],
          ids: ['radio_opt_1', 'radio_opt_2', 'radio_opt_3'],
          command: {
            order: 15,
            type: "str",
            arg: "--radio1",
          },
        },
        {
          type: "radioGroup",
          label: "Radio with default value",
          help: "Choose an option",
          options: ["Option 1", "Option 2", "Option 3"],
          default: "Option 2",
          command: {
            order: 15,
            type: "str",
            arg: "--radio2",
          },
        },
        {
          type: "radioGroup",
          label: "Required radio field",
          help: "Choose an option",
          required: true,
          options: ["Option 1", "Option 2", "Option 3"],
          command: {
            order: 15,
            type: "str",
            arg: "--radio3",
          },
        },
        {
          type: "radioGroup",
          label: "Radio field with different value/text pair",
          help: "Choose an option",
          required: true,
          options: [
            {
              value: "opt_1",
              text: "Option 1"
            },
            {
              value: "opt_2",
              text: "Option 2"
            },
            {
              value: "opt_3",
              text: "Option 3"
            }
          ],
          default: "opt_3",
          command: {
            order: 15,
            type: "str",
            arg: "--radio3",
          },
        },
        {
          type: "radioGroup",
          label: "Radio field (flags)",
          help: "Choose an option",
          required: true,
          options: ["Option 1", "Option 2", "Option 3"],
          command: {
            order: 15,
            type: "flag",
            args: ["--flag-opt-1", "--flag-opt-2", "--flag-opt-3"]
          },
        },
        {
          type: "radioGroup",
          label: "Disabled radios",
          help: "Choose an option",
          required: true,
          options: ["Option 1", "Option 2", "Option 3"],
          disabled: true,
          default: "Option 2",
          command: {
            order: 15,
            type: "flag",
            args: ["--d-opt-1", "--d-opt-2", "--d-opt-3"]
          },
        },
        {
          type: "radioGroup",
          label: "Disabled radios (ignored)",
          help: "Choose an option",
          required: true,
          options: ["Option 1", "Option 2", "Option 3"],
          disabled: true,
          default: "Option 2",
          command: {
            ignoreOnDisabled: true,
            order: 15,
            type: "flag",
            args: ["--invalid-opt-1", "--invalid-opt-2", "--invalid-opt-3"]
          },
        },
      ],
    },
    {
      type: "fieldset",
      title: "Form Checkboxs",
      form: [
        {
          type: "checkbox-right",
          label: "Checkbox",
          help: "Checkbox help message",
          required: false,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox1",
          },
        },
        {
          type: "checkbox-right",
          label: "Selected checkbox",
          help: "Checkbox help message",
          checked: true,
          required: false,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox2",
          },
        },
        {
          type: "checkbox-right",
          label: "Required checkbox",
          help: "Checkbox help message",
          required: true,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox3",
          },
        },
      ],
    },
    {
      type: "fieldset-default",
      title: "Default Checkboxs",
      form: [
        {
          type: "checkbox",
          label: "Checkbox",
          help: "Checkbox help message",
          required: false,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox1",
          },
        },
        {
          type: "checkbox",
          label: "Selected checkbox",
          help: "Checkbox help message",
          checked: true,
          required: false,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox2",
          },
        },
        {
          type: "checkbox",
          label: "Required checkbox",
          help: "Checkbox help message",
          required: true,
          command: {
            order: 20,
            type: "flag",
            arg: "--checkbox3",
          },
        },
        {
          type: "checkbox",
          labelHTML: "I agree to <a href=\"https://www.google.com\">Termly's Terms of Use</a> and <a href=\"https://www.google.com\">Privacy Policy</a>.",
          help: "Agree to the terms.",
          required: true,
          command: {
            order: 255,
            type: "flag",
            arg: "--accept-terms",
          },
        },
      ],
    },
    {
      type: "fieldset",
      titleHTML: "<a href=\"https://www.google.com/\">Advanced Features</a>",
      form: [
        {
          type: "text",
          label: "Custom attributes",
          help: "Some help message",
          attributes: {
            "data-username": "myusername"
          },
          command: {
            order: 50,
            type: "str",
            arg: "--af1",
          },
        },
        {
          type: "checkbox-right",
          labelHTML: "Use <a href=\"https://www.google.com\">Google</a>",
          help: "Some help message",
          required: false,
          command: {
            order: 20,
            type: "flag",
            arg: "--use-google",
          },
        },
      ],
    },
    {
      type: "fieldset",
      title: "Togglable Group 1",
      togglable: true,
      disabledOnLoad: false,
      collapsible: true,
      collapsedOnLoad: false,
      form: [
        {
          type: "text",
          label: "Text field",
          help: "Some help message",
          command: {
            order: 1,
            type: "str",
            arg: "--tf1",
          },
        },
        {
          type: "text",
          label: "Field with default message",
          help: "Some help message",
          required: true,
          default: "Some default text",
          command: {
            order: 1,
            type: "str",
            arg: "--tf2",
          },
        },
        {
          type: "text",
          label: "Text field",
          help: "Some help message",
          disabled: true,
          placeholder: "The field can't be enabled",
          command: {
            order: 1,
            type: "str",
            arg: "--tf3",
          },
        },
        {
          type: "text",
          label: "Text field",
          help: "Some help message",
          disabled: true,
          enableOnToggle: true,
          placeholder: "The field can be enabled after toggle",
          command: {
            order: 1,
            type: "str",
            arg: "--tf3",
          },
        },
      ],
    },
    {
      type: "fieldset",
      title: "Togglable Group 2",
      togglable: true,
      disabledOnLoad: true,
      collapsible: true,
      collapsedOnLoad: false,
      form: [
        {
          type: "text",
          label: "Text field",
          help: "Some help message",
          command: {
            order: 1,
            type: "str",
            arg: "--tf1",
          },
        },
        {
          type: "text",
          label: "Field with default message",
          help: "Some help message",
          required: true,
          default: "Some default text",
          command: {
            order: 1,
            type: "str",
            arg: "--tf2",
          },
        },

      ],
    },
    {
      type: "fieldset",
      title: "Advanced Group",
      collapsible: true,
      collapsedOnLoad: true,
      form: [
        {
          type: "checkbox-right",
          label: "Use field",
          help: "Some help message",
          required: false,
          eventListeners: {
            click: (evt) => {
              document.querySelector('#field1').disabled = !evt.target.checked
            }
          }
        },
        {
          type: "text",
          label: "Custom attributes",
          help: "Some help message",
          disabled: true,
          id: "field1",
          attributes: {
            "data-username": "myusername"
          },
          command: {
            order: 50,
            type: "str",
            arg: "--af1",
          },
        },
      ],
    },
  ],
}
