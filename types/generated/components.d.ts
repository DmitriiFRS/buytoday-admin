import type { Schema, Attribute } from '@strapi/strapi';

export interface WashWash extends Schema.Component {
  collectionName: 'components_wash_washes';
  info: {
    displayName: 'wash';
    description: '';
  };
  attributes: {
    drying: Attribute.String;
    programNums: Attribute.String;
    rpm: Attribute.String;
    capacity: Attribute.String;
  };
}

export interface RecupsRecups extends Schema.Component {
  collectionName: 'components_recups_recups';
  info: {
    displayName: 'recups';
  };
  attributes: {
    power: Attribute.String;
    noise: Attribute.String;
    panelSize: Attribute.String;
    airVolume: Attribute.String;
  };
}

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

export interface ParamsWrapperParamsWrapper extends Schema.Component {
  collectionName: 'components_params_wrapper_params_wrappers';
  info: {
    displayName: 'paramsWrapper';
    description: '';
  };
  attributes: {
    multiOuter: Attribute.Component<'multi-outer.multi-outer'>;
    fridges: Attribute.Component<'fridges.fridges'>;
    wash: Attribute.Component<'wash.wash'>;
    previewImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    brands: Attribute.Relation<
      'params-wrapper.params-wrapper',
      'oneToOne',
      'api::brand.brand'
    >;
    mainDescription: Attribute.Text;
    additionalDescription: Attribute.RichText;
    videoRef: Attribute.String;
    airPurifiers: Attribute.Component<'air-purifiers.air-purifiers'>;
    boilers: Attribute.Component<'boilers.boilers'>;
    aircond: Attribute.Component<'aircond.aircond'>;
    recups: Attribute.Component<'recups.recups'>;
    dehumids: Attribute.Component<'dehumids.dehumids'>;
    coolers: Attribute.Component<'coolers.coolers'>;
  };
}

export interface MultiOuterMultiOuter extends Schema.Component {
  collectionName: 'components_multi_outer_multi_outers';
  info: {
    displayName: 'multiOuter';
    description: '';
  };
  attributes: {
    powerSupply: Attribute.String;
    coolingAmperage: Attribute.String;
    err: Attribute.String;
    heatingAmperage: Attribute.String;
    cop: Attribute.String;
  };
}

export interface FridgesFridges extends Schema.Component {
  collectionName: 'components_fridges_fridges';
  info: {
    displayName: 'fridges';
    description: '';
  };
  attributes: {
    valueL: Attribute.String;
    freezerCapacity: Attribute.String;
    coldRoomValue: Attribute.String;
    noise: Attribute.String;
  };
}

export interface DehumidsDehumids extends Schema.Component {
  collectionName: 'components_dehumids_dehumids';
  info: {
    displayName: 'dehumids';
  };
  attributes: {
    powerSupply: Attribute.String;
    powerConsumption: Attribute.String;
    capacity: Attribute.String;
    circAirFlow: Attribute.String;
    coolant: Attribute.String;
    size: Attribute.String;
    weight: Attribute.String;
    m2: Attribute.String;
    performance: Attribute.String;
    drenage: Attribute.String;
    workingTemp: Attribute.String;
    noise: Attribute.String;
  };
}

export interface CoolersCoolers extends Schema.Component {
  collectionName: 'components_coolers_coolers';
  info: {
    displayName: 'coolers';
  };
  attributes: {
    coilMaterial: Attribute.String;
    hotWaterTemp: Attribute.String;
    chilledWaterTemp: Attribute.String;
    hotWaterSize: Attribute.String;
    chilledWaterSize: Attribute.String;
    thermalCap: Attribute.String;
    cooling: Attribute.String;
    size: Attribute.String;
  };
}

export interface BoilersBoilers extends Schema.Component {
  collectionName: 'components_boilers_boilers';
  info: {
    displayName: 'boilers';
    description: '';
  };
  attributes: {
    performanceMin: Attribute.String;
    heatingSource: Attribute.String;
    gasWorkingPressure: Attribute.String;
    kpd: Attribute.String;
    heatingTemperatureRange: Attribute.String;
    hotWaterTemperatureRange: Attribute.String;
    workingPressure: Attribute.String;
    expansionTankVolume: Attribute.String;
    water25LitersMin: Attribute.String;
    water30LitersMin: Attribute.String;
    maxminGasPressure: Attribute.String;
    oxygenSupply: Attribute.String;
    gasFlowRateMaxMin: Attribute.String;
    CombustionChamberType: Attribute.String;
    nominalPower: Attribute.String;
    maxPerformance: Attribute.String;
    size: Attribute.String;
  };
}

export interface AircondAircond extends Schema.Component {
  collectionName: 'components_aircond_airconds';
  info: {
    displayName: 'aircond';
    description: '';
  };
  attributes: {
    heatingBtu: Attribute.String;
    heatingKw: Attribute.String;
    coolingBtu: Attribute.String;
    coolingKw: Attribute.String;
    m2Area: Attribute.String;
    m3Area: Attribute.String;
    powerConsumption: Attribute.String;
    airComsumption: Attribute.String;
    innerBlockNoise: Attribute.String;
    outerBLockNoise: Attribute.String;
    innerBlockWeight: Attribute.String;
    outerBlockWeight: Attribute.String;
    freon: Attribute.String;
    innerBlockSize: Attribute.String;
    outerBlockSize: Attribute.String;
    wi_fi: Attribute.Relation<
      'aircond.aircond',
      'oneToOne',
      'api::wi-fi.wi-fi'
    >;
    btu_filters: Attribute.Relation<
      'aircond.aircond',
      'oneToOne',
      'api::btu-filtry.btu-filtry'
    >;
    compressorType: Attribute.Relation<
      'aircond.aircond',
      'oneToOne',
      'api::compressor-type-cond.compressor-type-cond'
    >;
    product: Attribute.Relation<
      'aircond.aircond',
      'oneToOne',
      'api::product.product'
    >;
    routeLength: Attribute.String;
    pipes: Attribute.String;
    externalPanel: Attribute.String;
    serving: Attribute.String;
    recirculation: Attribute.String;
    sizeCurtains: Attribute.String;
    powerSupply: Attribute.String;
    tempOutput: Attribute.String;
    fullSize: Attribute.String;
  };
}

export interface AirPurifiersAirPurifiers extends Schema.Component {
  collectionName: 'components_air_purifiers_air_purifiers';
  info: {
    displayName: 'air-purifiers';
    description: '';
  };
  attributes: {
    voltage: Attribute.String;
    nominalFrequency: Attribute.String;
    nominalPower: Attribute.String;
    anions: Attribute.String;
    ParticleRemovalVol: Attribute.String;
    filterReplacementPeriod: Attribute.String;
    tankCapacity: Attribute.String;
    maximumSprayVolume: Attribute.String;
    cableLength: Attribute.String;
    oscillationDegree: Attribute.String;
    engineSpeed: Attribute.String;
    airVelocity: Attribute.String;
    formaldehydeVol: Attribute.String;
    noise: Attribute.String;
    weight: Attribute.String;
    m2: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'wash.wash': WashWash;
      'recups.recups': RecupsRecups;
      'popular-params.populyarnye-parametry': PopularParamsPopulyarnyeParametry;
      'params-wrapper.params-wrapper': ParamsWrapperParamsWrapper;
      'multi-outer.multi-outer': MultiOuterMultiOuter;
      'fridges.fridges': FridgesFridges;
      'dehumids.dehumids': DehumidsDehumids;
      'coolers.coolers': CoolersCoolers;
      'boilers.boilers': BoilersBoilers;
      'aircond.aircond': AircondAircond;
      'air-purifiers.air-purifiers': AirPurifiersAirPurifiers;
    }
  }
}
