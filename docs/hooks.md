# Command Hooks
## Introduction

Command hooks are useful for custom command generation. Developers need to specify a global order in which the hook will be executed (along with other input's command generation instructions). The order is the same as those for inputs. During command generation, the provided hook function will be executed. You can perform any operation in the hook as long as it returns a string object that will be added to the output command.

## Usage

|Attribute|Description|
|-|-|
|`order`*|A global order that ranges from 0 to 255. During command generation, Form2Cmd finds elements (both inputs and hooks) in ascending order and generates commands according to the specification specified in the blueprint. It is the the same as those for form elements.|
|`hook`*|A custom function that will be executed during command generation. It should return a string that is expected to be inserted into the output command.|

Note: * means it is a required attribute.

## Example

To generate `-u username:password` from two different inputs, we can do the following.

```javascript
const blueprint = {
  command: {
    prefix: "curl",
    suffix: "",
    separator: " ",
    hooks: [
      {
        order: 1,
        hook: () => {
          const usernameField = document.querySelector('#username-input')
          const passwordField = document.querySelector('#password-input')
          if (usernameField.value.length > 0) {
            let arg = "-u " + usernameField.value
            if (passwordField.value.length > 0) {
              arg += ":" + passwordField.value
            }
            return arg
          }
          return ""
        }
      },
    ]
  },
  form: [
    {
      type: "fieldset",
      title: "Authentication",
      form: [
        {
          type: "text",
          label: "Username",
          id: "username-input",
          placeholder: "Username",
          help: "Input your username"
        },
        {
          type: "password",
          label: "Password",
          id: "password-input",
          placeholder: "Password",
          help: "Input your password",
        },
      ],
    },
  ]
}
```

