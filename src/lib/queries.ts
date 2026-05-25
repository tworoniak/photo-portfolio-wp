import { gql } from "graphql-request";

export const GET_ALL_SERIES = gql`
  query GetAllSeries {
    allPhotoSeries(first: 100, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        photoSeriesFields {
          genre
          location
          eventDate
          photoCount
          description
        }
      }
    }
  }
`;

export const GET_SERIES_BY_SLUG = gql`
  query GetSeriesBySlug($slug: ID!) {
    photoSeries(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      photoSeriesFields {
        genre
        location
        eventDate
        photoCount
        description
        gear
        photos {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_GENRES = gql`
  query GetGenres {
    photoGenres {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;
