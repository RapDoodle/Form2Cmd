# Form2Cmd

Form2Cmd is a declarative programming framework that helps programmers build graphical user interfaces (GUIs) for command-line-only applications. Programmers can use Form2Cmd to build web forms in a declarative manner. Form2Cmd then assists programmers in converting user inputs into the appropriate command for the application.

## Getting Started

1. Cloen the project

    ```bash
    git clone https://github.com/RapDoodle/Form2Cmd.git
    ```

1. Copy `gui.html` and `gui.manifest.js` into an appropriate location in your project.

1. (Optional) Add the following content to `.gitattributes` to avoid Form2Cmd messing up with GitHub's programming language statistics counting.

    ```
    # Form2Cmd
    gui.html linguist-vendored
    gui.manifest.js linguist-vendored
    ```

1. Edit `gui.manifest.js` according to your needs.

## APIs

### Title

The title of the GUI and the page can be specified in the blueprint's `meta` field.

```javascript
meta: {
  title: "Demo GUI",
}
```

### Fieldsets

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

### Form inputs

With Form2Cmd, you can build forms in a declarative manner. Supported input types include `text`, `email`, `password`, `date`, `email`, `number`, `tel`, `url`, `range`, `radio`, `checkbox`, and `checkbox-right`. 

The attributes that can be specified are summarized in the following table.

|Attribute|Descriptionn|
|-|-|
|`type`|The type of the input.|
|`label`|The input's label.|
|`help`|A help message that will display when the mouse is hovering over the label.|
|`disabled`|Whether the input element is disabled.|
|`placeholder`|The input's placeholder.|
|`default`|The default text/choice/option.|
|`options`|Only required when the input type is `select` or `radio`. Can be a list of strings or objects containing `value` and `text` attributes.|
|`attributes`|An object containing the key and value of attributes that are not natively supported by Form2Cmd.|
|`command`|The rule of converting the current form input into commands.|
|`id`|The input's id (except radios and checkboxes). Only needed when you need to perform custom DOM operations.|
|`ids`|The radios and checkboxes' id. Only needed when you need to perform custom DOM operations.|

## Credits
The project prototype's HTML and CSS borrowed code from Madhu Murali's [post](https://blog.hubspot.com/website/html-form-template) on HubSpot.

## Contribution
Feel free to open a pull request if you would like to contribute to the project.

## License
The project is licensed under the MIT License.