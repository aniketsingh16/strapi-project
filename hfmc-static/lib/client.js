import sanityClient from '@sanity/client';
import imagwUrlBuilder from '@sanity/image-url';

 export const client = sanityClient({
    projectId: 'o6fr0bwf',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'skgrRMddRgun98swnQCwFYIU0ZxPbQ1FSLZw3lSLQWievcpqJ0JqLyXQWgWo3Bk4GEddEu16qIT6lXa6S6LlhhDDhApH55NT95shc6GegfddAblvKZxxrMSE0hGsZ1PKb2xrdXZjec4zKpb0ApQ5qFfouJsfyDnDlxdyKXm7OemodZpauupj',

});

const builder = imagwUrlBuilder(client);
export const urlFor = (source) => builder.image(source);