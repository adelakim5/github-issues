import { getData } from '../../utils';
import { API_URL } from '../../constants';
import Observable from './Observable';

class LabelListModel extends Observable {
  #labelList = [];

  constructor() {
    super();
    this.#labelList = [];
    this.#setInitialLabelList();
  }

  get labelList() {
    return this.#labelList;
  }

  addLabel(label) {
    this.#labelList = this.#labelList.concat(label);
    this.notify(this.#labelList);
  }

  async #setInitialLabelList() {
    this.#labelList = await getData(API_URL.LABEL);
    this.notify(this.#labelList);
  }
}

export default new LabelListModel();
