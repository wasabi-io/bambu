import Map from 'wasabi-common/lib/collection/Map';
import DefaultInput from "../input/DefaultInput";
import TextAreaInput from "../input/TextArea";
import SelectInput from "../input/SelectInput";

const formManager = new Map();

formManager.putAll(
    {
        text: DefaultInput, // Default. Defines a single-line text field (default width is 20 characters)
        textArea: TextAreaInput,
        select: SelectInput,
        button: DefaultInput, // Defines a clickable button (mostly used with a JavaScript to activate a script)
        checkbox: DefaultInput, // Defines a checkbox
        color: DefaultInput, // Defines a color picker
        date: DefaultInput, // Defines a date control (year, month and day (no time))
        "datetime-local": DefaultInput, // Defines a date and time control (year, month, day, hour, minute, second, and fraction of a second (no time zone)
        email: DefaultInput, // Defines a field for an e-mail address
        file: DefaultInput, // Defines a file-select field and a "Browse..." button (for file uploads)
        hidden: DefaultInput, // Defines a hidden input field
        image: DefaultInput, // Defines an image as the submit button
        month: DefaultInput, // Defines a month and year control (no time zone)
        number: DefaultInput, // Defines a field for entering a number
        password: DefaultInput, // Defines a password field (characters are masked)
        radio: DefaultInput, // Defines a radio button
        range: DefaultInput, // Defines a control for entering a number whose exact value is not important (like a slider control). Default range is from 0 to 100
        reset: DefaultInput, // Defines a reset button (resets all form values to default values)
        search: DefaultInput, // Defines a text field for entering a search string
        submit: DefaultInput, // Defines a submit button
        tel: DefaultInput, // Defines a field for entering a telephone number
        time: DefaultInput, // Defines a control for entering a time (no time zone)
        url: DefaultInput, // Defines a field for entering a URL
        week: DefaultInput, // Defines a week and year control (no time zone)
    });

export default formManager;
