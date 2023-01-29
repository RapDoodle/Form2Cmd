# Form2Cmd

## Introduction

Form2Cmd is a declarative programming framework that helps programmers build graphical user interfaces (GUIs) for command-line-only applications. Programmers can use Form2Cmd to build web forms in a declarative manner. Form2Cmd then converts user inputs into the appropriate command for the command-line application.

### Demo

[Generate cURL command for HTTP requests](https://github.com/RapDoodle/cURL-GUI) converts form input into the appropriate command for the command line tool [cURL](https://curl.se/). An online version can be found [here](https://rapdoodle.github.io/form2cmd/curl/index.html).

<img src="docs/assets/demo.jpg?raw=true" height="500">

### Feature highlights

- No reliance on other libraries
- Runs natively on a browser
- Only adds two additional files to your project (can be combined into one if you wish)

## Getting Started

1. Clone the project

    ```bash
    git clone https://github.com/RapDoodle/Form2Cmd.git
    ```

1. Copy `gui.html` and `gui.manifest.js` into an appropriate location in your project. `gui.html` can be renamed to any filename you like.

1. (Optional) Add the following content to `.gitattributes` to avoid Form2Cmd messing up with GitHub's programming language statistics counting.

    ```
    # Form2Cmd
    gui.html linguist-vendored
    gui.manifest.js linguist-vendored
    ```

1. Edit the configuration file `gui.manifest.js` according to your needs. The configuration file already contains most of the scenarios you may encounter.

1. Let users run Form2Cmd in their browser or deploy it to your server. 

## Configuration

This section provides a guide to creating your own `gui.manifest.js`.

### Meta

The meta field stores the basic information about the current form.

|Attribute|Description|
|-|-|
|`title`|The title of the GUI and the page.|
|`apiVersion`|The API version. The latest API version is `0.1.0`.|

A sample `meta` field

```javascript
meta: {
  title: "The title goes here",
  apiVersion: "0.1.0"
},
```

### Command

The blueprint's command field contains information about the command.

|Attribute|Description|
|-|-|
|`prefix`*|The prefix of the output command. Usually contains the name of the program. For example, `curl`.|
|`suffix`|Usually not used. Can be used to specify the additional text that will be appended at the end of the output command.|
|`separator`|The separator used. By default, it is an empty space. Other options include `=`.|
|`hooks`|Custom hooks that will be triggered in command/hook's order. Can be used to add custom logic into command generation.|

Note: * means it is a required attribute.

An example of the command field

```javascript
command: {
  prefix: "curl",
  suffix: "",     // Optional
  separator: " "  // Optional
},
```

#### Hooks

Hooks can be useful when you need greater flexibility in command generation. For example, the `-u` command contains `username:password` separated by a colon(:). You could ask users to type the two in one field, or you can separate them into two fields with command hooks during command generation. For more details, visit [here](./docs/hooks.md).

### Form components

#### Fieldsets

Fieldsets are form elements containers. Fieldsets can be nested within one another.

|Attribute|Description|
|-|-|
|`type`*|The type of the fieldset. Currently supports `fieldset` (double-column) and `fieldset-default` (single-column).|
|`title`|Fieldset lengend.|
|`togglable`|Whether the inputs in the fieldset can be toggled to enabled/disabled. Default: `false`.|
|`disabledOnLoad`|Whether the fieldset is disabled on load. Default: `false`.|
|`collapsible`|Whether the fieldset can be collapsed. Default: `false`.|
|`collapsedOnLoad`|Whether the fieldset is collapsed on load. Default: `false`.|
|`form`|A list containing the specification of form elements.|

Note: * means it is a required attribute.

An example fieldset:

```javascript
{
  type: "fieldset",
  title: "The Fieldset's Title",
  togglable: false,
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
        arg: "--text-input",
      },
    },
  ],
},
```

#### Form inputs

With Form2Cmd, you can build forms in a declarative manner. Supported input types include `text`, `email`, `password`, `date`, `email`, `number`, `tel`, `url`, `range`, `radioGroup`, `textarea`, `checkbox`, and `checkbox-right`. 

The attributes that can be specified are summarized in the following table.

|Attribute|Descriptionn|
|-|-|
|`type`*|The type of the input.|
|`label`|The input label's text. Can't be used together with `labelHTML`.|
|`labelHTML`|The HTML code of the label. Can't be used together with `label`. Unless absolutely necessary, avoid using this attribute.|
|`help`|A help message that will display when the mouse is hovering over the label.|
|`disabled`|Whether the input element is disabled.|
|`placeholder`|The input's placeholder.|
|`default`|The default text/choice/option. When the input type is `radioGroup` or `select`, and value/text pair is used for the `options` field instead of the a string list, the default value should correspond to the `value` attribute.|
|`options`|Only required when the input type is `select` or `radioGroup`. Can be a list of strings or objects containing both the `value` and `text` attributes.|
|`attributes`|An object containing the key and value of attributes that are not natively supported by Form2Cmd. For example, `style`.|
|`command`|The rule of converting the current form input into commands. Greater detail is available in subsequent sections.|
|`id`|The input's id (except `radioGroup`). Only needed when you need to perform custom DOM operations.|
|`ids`|The radios' id. Only needed when you need to perform custom DOM operations.|
|`eventListeners`|An object of event listeners of the input element. The key should be the name of the event (e.g., `click`) and the value should be a callable function that takes in either no argument or an argument for the `event` object.|

Note: * means it is a required attribute.

#### Text fields

Other than a type of `text`, other types including `email`, `password`, `date`, `email`, `number`, `tel`, `url` are also similar.

An example of a text field.

```javascript
{
  type: "text",
  label: "Name of the field",
  placeholder: "Some hint text",
  default: "https://example.com/",
  help: "Some help message.",
  required: false,
  command: {
    order: 6,
    type: "str",
    arg: "--name",
  },
},
```

If the user typed `Bob` in the field, the output command will contain `--name Bob`.

##### Checkbox

There are two types of checkboxes, `checkbox-right` and `checkbox`. `checkbox-right` displays the label to the **left** of the checkbox. `checkbox`, on the other hand, displays the label to the right of the checkbox. Usually, `checkbox-right` is used in `fieldset`, and `checkbox` is used in `fieldset-default`.

An example of a `checkbox-right`.

```javascript
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
```

If the checkbox is checked, the output command will contain `--checkbox1`.

An example of a `checkbox`.

```javascript
{
  type: "checkbox",
  labelHTML: "I agree to <a href=\"https://www.example.com\">Termly's Terms of Use</a> and <a href=\"https://www.example.com\">Privacy Policy</a>.*",
  help: "Agree to the terms.",
  required: true,
  command: {
    order: 255,
    type: "flag",
    arg: "--accept-terms",
  },
},
```

#### Select

Provide the options through the `options` field. There are multiple ways you can specify the options:

1. A list of strings

    ```javascript
    {
      type: "select",
      label: "Select field",
      help: "Some help message",
      default: "Option 1",
      required: false,
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
    ```

    When `Option 2` is selected, the output command will contain `--option1 "Option 2"`.

2. value/text pairs

    ```javascript
    {
      type: "select",
      label: "Select with different value/text pair",
      help: "Some help message",
      default: "opt_3",
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
      command: {
        order: 10,
        type: "str",
        arg: "--option2",
      },
    }
    ```

    When `Option 3` is selected, the output command will contain `--option2 "opt_3"`.

3. Flags

    ```javascript
    {
      type: "select",
      label: "Select field",
      help: "Some help message",
      default: "Option 1",
      required: false,
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
      ],
      command: {
        order: 10,
        type: "str",
        args: ["--choice1", "--choice2", "--choice3"],
      },
    },
    ```

    When `Option 3` is selected, the output command will contain `--choice3"`.

#### Radio group

Similar to selects, you need to provide the options through the `options` field. There are multiple ways you can specify the options:

1. A list of strings

    ```javascript
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
    ```

    When `Option 2` is selected, the output command will contain `--radio1 "Option 2"`.

2. value/text pairs

    ```javascript
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
        arg: "--radio2",
      },
    },
    ```

    When `Option 3` is selected, the output command will contain `--radio2 "opt_3"`.

3. Flags

    ```javascript
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
    ```

    When `Option 3` is selected, the output command will contain `--flag-opt-3`.

#### Event listeners

You can attach event listeners to inputs to perform add more complex logic to your program. In this example, a checkbox is used to control the on/off of an input field.

```javascript
{
  type: "checkbox-right",
  label: "Follow redirects",
  command: {
    order: 1,
    type: "flag",
    arg: "-L",
  },
  eventListeners: {
    click: (evt) => {
      // Disable the below input when checked
      document.querySelector('#max-redirects-input').disabled = !evt.target.checked
    }
  }
},
{
  type: "number",
  label: "Max redirects",
  id: "max-redirects-input",
  default: 50,
  disabled: true,
  command: {
    order: 1,
    type: "str",
    arg: "--retry",
    ignoreOnDisabled: true,
    ignoreDefaultValue: true,
  },
},
```

### Command blueprint

Command blueprint is used to specify how the command for a given input element should be generated.

|Attribute|Description|
|-|-|
|`order`*|A global order that ranges from 0 to 255. During command generation, Form2Cmd finds elements (both inputs and hooks) in ascending order and generates commands according to the specification specified in the blueprint.|
|`type`*|The type of the command. It can be either `str` or `flag`. A `str` expects a value following behind (e.g., `-n "My Name"`). A `flag` only contains the argument (e.g., `-v`).|
|`arg`*|The name of the argument. For example, `-n`.|
|`args`|A list of arguments. It can be used when the input type is `radioGroup` or `select`.|
|`ignoreOnDisabled`|If the input element is disabled, it will not be contained in the output command, even though it may contain user input. Default: `false`.|
|`ignoreDefaultValue`|If the input contains a value exactly the same as the default value, it will not be contained in the output command. Default: `false`. Note that strict equality may be difficult for floating point values.|
|`multilineStrategy`|The strategy for values containing multiple lines. Available options include `default` and `multiArgs`. `default` adds a backslash to the end lines, `multiArgs` splits the command into multiple arguments. For example, `-F name=daniel -F type=text/foo`.|

Note: * means it is a required attribute.

## Update

To use the latest feature provided by Form2Cmd:

1. Check whether the API version is compatible. A new API version number usually indicates new features are added, and old features may be deprecated. The difference between API versions are documented in `/docs/api/changelog.md` (no changes have been made to the API version yet, so the document is currently unavailable).
1. Delete `gui.html` from your project and replace it with a new one.
1. Make changes to your configuration file if necessary.

## Credits
The project prototype's HTML and CSS borrowed code from Madhu Murali's [post](https://blog.hubspot.com/website/html-form-template) on HubSpot.

## Contribution
Feel free to open a pull request if you would like to contribute to the project.

## License
The project is licensed under the MIT License.