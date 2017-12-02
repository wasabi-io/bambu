export enum inputType {
    button = "button",                           // Defines a clickable button (mostly used with a JavaScript to activate a script)
    checkbox = "checkbox",	                        // Defines a checkbox
    color = "color",                            // Defines a color picker
    date = "date",	                            // Defines a date control (year, month and day (no time))
    datetimeLocal = "datetime-local",   // Defines a date and time control (year, month, day, hour, minute, second, and fraction of a second (no time zone)
    email = "email",	                        // Defines a field for an e-mail address
    file = "file",		                        // Defines a file-select field and a "Browse..." button (for file uploads)
    hidden = "hidden",	                        // Defines a hidden input field
    image = "image",	                        // Defines an image as the submit button
    month = "month",	                        // Defines a month and year control (no time zone)
    number = "number",	                        // Defines a field for entering a number
    password = "password",		                    // Defines a password field (characters are masked)
    radio = "radio",                            // Defines a radio button
    range = "range",		                    // Defines a control for entering a number whose exact value is not important (like a slider control). Default range is from 0 to 100
    reset = "reset",		                    // Defines a reset button (resets all form values to default values)
    search = "search",		                    // Defines a text field for entering a search string
    submit = "submit",		                    // Defines a submit button
    tel = "tel",		                        // Defines a field for entering a telephone number
    text = "text",	                        	// Default. Defines a single-line text field (default width is 20 characters)
    time = "time",	                        	// Defines a control for entering a time (no time zone)
    url = "url",		                        // Defines a field for entering a URL
    week = "week"	                        	// Defines a week and year control (no time zone)
}
