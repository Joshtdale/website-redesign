import project from './project'
import page from './page';
import { contentBlock } from './contentBlock';
import { pageElements } from './pageElements';
import { portableText } from './portableText';
import { customStyles } from './pageElements/customStyles';

const schemas = [
    project,
    contentBlock,
    page,
    pageElements,
    portableText,
    customStyles,
];

export default schemas;