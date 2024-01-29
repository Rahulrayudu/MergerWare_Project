import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { userCollections } from '/imports/api/links';
import '../imports/api/userCollections';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
});
