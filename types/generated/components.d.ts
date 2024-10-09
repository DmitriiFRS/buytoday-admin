import type { Schema, Attribute } from '@strapi/strapi';

export interface PopularParamsPopulyarnyeParametry extends Schema.Component {
  collectionName: 'components_popular_params_populyarnye_parametry';
  info: {
    displayName: '\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'popular-params.populyarnye-parametry': PopularParamsPopulyarnyeParametry;
    }
  }
}
