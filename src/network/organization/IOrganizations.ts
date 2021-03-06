/**
 * Danh sách tổ chức
 */
export interface IOrganizations {
    totalLength: 1,
    data: IOrganizationData[]
}

/**
 * totalLength: 1,
      data: 
       [ { _id: '5c34755faf9737c702c16536',
      id: '5c34755faf9737c702c16536',
      organizationName: 'Kho Long Khanh',
      organizationDescription: '',
      configurations: 
       { dayOff: { inWeeks: [], inYears: [] },
         transportServices: 
          { '1_1': null,
            '1_2': null,
            '1_3': null,
            '2_1': null,
            '2_2': null,
            '2_3': null,
            '3_1': null,
            '3_2': null,
            '3_3': null },
         turn_on_two_step_verification: false,
         strongPassword: true,
         firstWeekDay: null,
         dateFormatConfig: null,
         dateFormat: null,
         workingDays: [],
         smsBrandName: null,
         preventReSubmit: false,
         preventUseInventory: false,
         telematics: false,
         erp_sync: true,
         allowSubmitOverTime: false,
         allowApproveOrder: false,
         preventSubmitOverTime: false,
         typeTransportation: null,
         typeWarehouse: null,
         typeShipment: null,
         deviceIdType: null,
         timeZoneOffset: '7',
         allowSendEmail: false,
         consolidatedOrder: false,
         supplierDepot: false,
         unlockOneVrpRoute: false,
         randomVehicleSeed: false,
         transportServiceBy: 'PRODUCT',
         oneDeviceSignInActivated: true,
         avoidUsingApp: false,
         use3DLoading: false,
         avoidCreatingTask: false,
         requireDriver: true,
         showCustomerOnOrder: false,
         enableRouteUnlock: false,
         showDriverOnRoute: false,
         hideNumberCollected: false,
         hidePartlyDelivery: false,
         allowCreateExtraTask: false,
         orderCreationPermission: [] },
      createdBy: { _id: '5bff569fa59c5d4b5e9b1629', displayName: 'png' },
      parentId: 
       { configurations: 
          { dayOff: { inWeeks: [], inYears: [] },
            transportServices: 
             { '1_1': null,
               '1_2': null,
               '1_3': null,
               '2_1': null,
               '2_2': null,
               '2_3': null,
               '3_1': null,
               '3_2': null,
               '3_3': null },
            turn_on_two_step_verification: false,
            strongPassword: true,
            firstWeekDay: null,
            dateFormatConfig: null,
            dateFormat: null,
            workingDays: [],
            smsBrandName: null,
            preventReSubmit: false,
            preventUseInventory: false,
            telematics: false,
            erp_sync: true,
            allowSubmitOverTime: true,
            allowApproveOrder: true,
            preventSubmitOverTime: false,
            typeTransportation: null,
            typeWarehouse: null,
            typeShipment: null,
            deviceIdType: null,
            timeZoneOffset: '7',
            allowSendEmail: false,
            consolidatedOrder: false,
            supplierDepot: false,
            unlockOneVrpRoute: false,
            randomVehicleSeed: false,
            transportServiceBy: 'PRODUCT',
            oneDeviceSignInActivated: true,
            avoidUsingApp: false,
            use3DLoading: false,
            avoidCreatingTask: false,
            requireDriver: true,
            showCustomerOnOrder: false,
            enableRouteUnlock: true,
            showDriverOnRoute: false,
            hideNumberCollected: false,
            hidePartlyDelivery: false,
            allowCreateExtraTask: true,
            allowRedelivery: false,
            flexVehicleType: false,
            useFTP: false,
            oddevenPolicy: false,
            showDriverOnVehicle: false,
            longhaul: false,
            approveDepotOrderConfig: false,
            country: 'vi',
            currency: 'VND',
            oversizedGoodRestriction: false,
            orderCreatorPermission: [],
            orderCreationPermission: [] 
            },
         organizationCode: 'LK',
         categoryIds: 
          [ { _id: '5afe91638fd3933328d0e335',
              organizationCategoryName: 'Branch' } ],
         _id: '5c346d9c15957dc1022bbe84',
         organizationName: 'Branch LK' 
         },
      createdAt: '2019-01-08T10:03:11.280Z',
      updatedAt: '2020-10-12T06:43:17.500Z',
      coordinate: { latitude: 10.939841, longitude: 107.270417 },
      algoConfig: 
       { partnerCluster: false,
         useOrderPriority: false,
         maxClusterPerTrip: '2',
         splitDelivery: false,
         includeInactiveVehiclesOnSplitDelivery: false,
         openRoute: false,
         hardTimeWindows: false,
      clusteringByDistrict: false,
      useClustering: false,
      useServiceTime: false,
      useFamiliarity: true,
      limitBikeDistance: 50,
      limitBikeDistanceSegment: 100,
      limitBikeXdock: 10,
      limitWaitTime: 0.5,
      lunchTime: true,
      autoReduceDriver: false,
      startWorkingTime: 7,
      weightUnit: 7,
      volumeUnit: 0.007,
      selfLearnSortingTime: false,
      selfLearnServiceTime: false,
      selfLearnTraffic: false,
      unloadMinTime: 1,
      unloadMinWeight: 100,
      unloadMinVolume: 0.2,
      useVolume: false,
      minTime: '15',
      maxTime: '45',
      reDelivery: true,
      timeBalancing: false,
      useColdChain: false,
      useERP: false,
      useWMS: false,
      useReport: true,
      dynamicLoadingTime: false,
      travelTime: 0,
      loadingTimePerProduct: 0,
      splitRoute: false,
      clusteringType: null,
      nearestNeighborSequence: false,
      vehiclePriority: 'SMALL_VOLUME',
      prioritizedOrderWeight: 0,
      prioritizedOrderVolume: 0,
      restrictedArea: [],
      limitNumberTrip: null
       }
 */
export interface IOrganizationData {
    _id: string,
    id: string,
    organizationName: string,
    organizationDescription: string,
    configurations:
    {
        dayOff: { inWeeks: [], inYears: [] },
        transportServices:
        {
            '1_1': any,
            '1_2': any,
            '1_3': any,
            '2_1': any,
            '2_2': any,
            '2_3': any,
            '3_1': any,
            '3_2': any,
            '3_3': any
        },
        turn_on_two_step_verification: boolean,
        strongPassword: boolean,
        firstWeekDay: any,
        dateFormatConfig: any,
        dateFormat: any,
        workingDays: [],
        smsBrandName: any,
        preventReSubmit: boolean,
        preventUseInventory: boolean,
        telematics: boolean,
        erp_sync: boolean,
        allowSubmitOverTime: boolean,
        allowApproveOrder: boolean,
        preventSubmitOverTime: boolean,
        typeTransportation: any,
        typeWarehouse: any,
        typeShipment: any,
        deviceIdType: any,
        timeZoneOffset: string,
        allowSendEmail: boolean,
        consolidatedOrder: boolean,
        supplierDepot: boolean,
        unlockOneVrpRoute: boolean,
        randomVehicleSeed: boolean,
        transportServiceBy: string,
        oneDeviceSignInActivated: boolean,
        avoidUsingApp: boolean,
        use3DLoading: boolean,
        avoidCreatingTask: boolean,
        requireDriver: boolean,
        showCustomerOnOrder: boolean,
        enableRouteUnlock: boolean,
        showDriverOnRoute: boolean,
        hideNumberCollected: boolean,
        hidePartlyDelivery: boolean,
        allowCreateExtraTask: boolean,
        orderCreationPermission: []
    },
    createdBy: { _id: string, displayName: string },
    parentId:
    {
        configurations:
        {
            dayOff: { inWeeks: [], inYears: [] },
            transportServices:
            {
                '1_1': any,
                '1_2': any,
                '1_3': any,
                '2_1': any,
                '2_2': any,
                '2_3': any,
                '3_1': any,
                '3_2': any,
                '3_3': any
            },
            turn_on_two_step_verification: boolean,
            strongPassword: boolean,
            firstWeekDay: any,
            dateFormatConfig: any,
            dateFormat: any,
            workingDays: [],
            smsBrandName: any,
            preventReSubmit: boolean,
            preventUseInventory: boolean,
            telematics: boolean,
            erp_sync: boolean,
            allowSubmitOverTime: boolean,
            allowApproveOrder: boolean,
            preventSubmitOverTime: boolean,
            typeTransportation: any,
            typeWarehouse: any,
            typeShipment: any,
            deviceIdType: any,
            timeZoneOffset: string,
            allowSendEmail: boolean,
            consolidatedOrder: boolean,
            supplierDepot: boolean,
            unlockOneVrpRoute: boolean,
            randomVehicleSeed: boolean,
            transportServiceBy: string,
            oneDeviceSignInActivated: boolean,
            avoidUsingApp: boolean,
            use3DLoading: boolean,
            avoidCreatingTask: boolean,
            requireDriver: boolean,
            showCustomerOnOrder: boolean,
            enableRouteUnlock: boolean,
            showDriverOnRoute: boolean,
            hideNumberCollected: boolean,
            hidePartlyDelivery: boolean,
            allowCreateExtraTask: boolean,
            allowRedelivery: boolean,
            flexVehicleType: boolean,
            useFTP: boolean,
            oddevenPolicy: boolean,
            showDriverOnVehicle: boolean,
            longhaul: boolean,
            approveDepotOrderConfig: boolean,
            country: string,
            currency: string,
            oversizedGoodRestriction: boolean,
        }
        organizationCode: string,
        categoryIds:
        [{
            _id: string,
            organizationCategoryName: string
        }],
        _id: string,
        organizationName: string
    }
    createdAt: string,
    updatedAt: string,
    coordinate: { latitude: number, longitude: number },
    algoConfig:
    {
        partnerCluster: boolean,
        useOrderPriority: boolean,
        maxClusterPerTrip: string,
        splitDelivery: boolean,
        includeInactiveVehiclesOnSplitDelivery: boolean,
        openRoute: boolean,
        hardTimeWindows: boolean,
        clusteringByDistrict: boolean,
        useClustering: boolean,
        useServiceTime: boolean,
        useFamiliarity: boolean,
        limitBikeDistance: number,
        limitBikeDistanceSegment: number,
        limitBikeXdock: number,
        limitWaitTime: number,
        lunchTime: boolean,
        autoReduceDriver: boolean,
        startWorkingTime: number,
        weightUnit: number,
        volumeUnit: number,
        selfLearnSortingTime: boolean,
        selfLearnServiceTime: boolean,
        selfLearnTraffic: boolean,
        unloadMinTime: number,
        unloadMinWeight: number,
        unloadMinVolume: number,
        useVolume: boolean,
        minTime: string,
        maxTime: string,
        reDelivery: boolean,
        timeBalancing: boolean,
        useColdChain: boolean,
        useERP: boolean,
        useWMS: boolean,
        useReport: boolean,
        dynamicLoadingTime: boolean,
        travelTime: number,
        loadingTimePerProduct: number,
        splitRoute: boolean,
        clusteringType: any,
        nearestNeighborSequence: boolean,
        vehiclePriority: string,
        prioritizedOrderWeight: number,
        prioritizedOrderVolume: number,
        restrictedArea: any[],
        limitNumberTrip: any
    }

}