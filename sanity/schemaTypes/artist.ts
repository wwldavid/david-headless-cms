export default {
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'bio', title: 'Biography', type: 'text'},
    {name: 'artworks', title: 'Artworks', type: 'array', of: [{type: 'reference', to: [{type: 'painting'}]}]}, 
  ],
};