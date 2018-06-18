import Map from 'wasabi-common/lib/collection/Map';
import TextSearchInput from "./input/TextSearchInput";
import GridSearchItem from "./GridSearchItem";

const searchManager = new Map<string, React.SFC<GridSearchItem>>();

searchManager.putAll(
    {
        default: TextSearchInput,
        text: TextSearchInput
    }
);

export default searchManager;
