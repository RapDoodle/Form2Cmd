# Form2Cmd

## Introduction

Form2Cmd is a declarative programming framework that helps programmers build graphical user interfaces (GUIs) for command-line-only applications. Programmers can use Form2Cmd to build web forms in a declarative manner. Form2Cmd then converts user inputs into the appropriate command for the command-line application.

### Demo

[Generate cURL command for HTTP requests]() converts form input into the appropriate command for the command line tool [cURL](https://curl.se/).

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

1. Let users run Form2Cmd in their browser, or deploy it to your server. 

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
  title: "Demo GUI",
  apiVersion: "0.1.0"
}
```

### Command

The blueprint's command field contains information about the command.

|Attribute|Description|
|-|-|
|`prefix`|The prefix of the output command. Usually contains the name of the program. For example, `curl`|
|`suffix`|Usually not used. Can be used to specify the additional text that will be appended at the end of the output command.|
|`separator`|The separator used. By default, it is an empty space. Other options include `=`.|
|`hooks`|Custom hooks that will be triggered in command/hook's order. Can be used to add custom logics into command generation.|

An example of the command field

```javascript
command: {
  prefix: "curl",
  suffix: "",  // Optional
  separator: " "  // Optional
},
```

### Form components

#### Fieldsets

Fieldsets are essentially containers of form elements. Fieldsets can be nested within one another. A fieldset contains a legend. The content of the legend can be specified in the `title` field. A fieldset also contains a list of form elements specified in the `form` attribute. A fieldset also contains many advanced features, including toggle input's enable/disabled and collapse the entire fieldset. These features will be discussed in the advanced features section.

|Attribute|Description|
|-|-|
|`type`|The type of the fieldset. Currently supports `fieldset` and `fieldset-default`.|
|`title`|Fieldset lengend.|
|`form`|A list containing the specification of form elements.|
|`togglable`|Whether the form can be toggled to enable/disable.|
|`disabledOnLoad`|Whether the fieldset is disabled on load.|
|`collapsible`|Whether the fieldset can be collapsed.|
|`collapsedOnLoad`|Whether the fieldset is collapsed on load.|

An example fieldset:

```javascript
{
  type: "fieldset",
  title: "The Fieldset's Title",
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

Note: By default, `fieldset`s are double-columned. If you wish a single-columned fieldset, specify `fieldset-default` in the `type` field.

#### Form inputs

With Form2Cmd, you can build forms in a declarative manner. Supported input types include `text`, `email`, `password`, `date`, `email`, `number`, `tel`, `url`, `range`, `radioGroup`, `checkbox`, and `checkbox-right`. 

The attributes that can be specified are summarized in the following table.

|Attribute|Descriptionn|
|-|-|
|`type`|The type of the input.|
|`label`|The input's label.|
|`help`|A help message that will display when the mouse is hovering over the label.|
|`disabled`|Whether the input element is disabled.|
|`placeholder`|The input's placeholder.|
|`default`|The default text/choice/option.|
|`options`|Only required when the input type is `select` or `radioGroup`. Can be a list of strings or objects containing `value` and `text` attributes.|
|`attributes`|An object containing the key and value of attributes that are not natively supported by Form2Cmd.|
|`command`|The rule of converting the current form input into commands.|
|`id`|The input's id (except radios and checkboxes). Only needed when you need to perform custom DOM operations.|
|`ids`|The radios and select's id. Only needed when you need to perform custom DOM operations.|

## Update

To use the latest feature provided by Form2Cmd:

1. Check whether the API version is compatible. A new API version number usually indicates new features are added and old features may be deprecated. The difference between API versions are documented in `/docs/api/changelog.md` (no changes have been made to the API version yet, so the document is currently unavailable).
1. Delete `gui.html` from your project and replace it with a new one.
1. Make changes to your configuration file if necessary.

## Credits
The project prototype's HTML and CSS borrowed code from Madhu Murali's [post](https://blog.hubspot.com/website/html-form-template) on HubSpot.

## Contribution
Feel free to open a pull request if you would like to contribute to the project.

## License
The project is licensed under the MIT License.