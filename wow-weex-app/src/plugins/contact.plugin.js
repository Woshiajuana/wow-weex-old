const contacts = weex.requireModule('contactsModule');
import './Promise'
export default {
  pickContact: () => new Promise((resolve, reject) => {
    contacts.pickContact(e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
    // resolve([{phone:'13022199055'}])
  }).handle(),
  findContacts: () => new Promise((resolve, reject) => {
    contacts.pickContactsAll(e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),
};
