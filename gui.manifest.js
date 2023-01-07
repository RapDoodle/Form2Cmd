const blueprint = {
  meta: {
    title: "Demo GUI",
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
          type: "radio",
          label: "Radio field",
          help: "Choose an option",
          options: ["Option 1", "Option 2", "Option 3"],
          command: {
            order: 15,
            type: "str",
            arg: "--radio1",
          },
        },
        {
          type: "radio",
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
          type: "radio",
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
          type: "radio",
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
      ],
    },
  ],
}
