import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/home/shahrukh/ivolve/web-client/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/login',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__user__account" */ '../user/account'),
              LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                .default,
            })
          : require('../user/account').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/home/shahrukh/ivolve/web-client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/mfa-login',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "p__MfaLogin" */ '../MfaLogin'),
          LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
            .default,
        })
      : require('../MfaLogin').default,
    exact: true,
  },
  {
    path: '/service',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__DetasadCloudLayout" */ '../../layouts/DetasadCloudLayout'),
          LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/DetasadCloudLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['projectScope', 'unscoped'],
    routes: [
      {
        path: '/service',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__service___layout" */ '../service/_layout'),
              LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                .default,
            })
          : require('../service/_layout').default,
        authority: ['projectScope', 'unscoped'],
        routes: [
          {
            path: '/service/billing',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__Dashboard" */ '../billing/Dashboard'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/Dashboard').default,
            authority: ['projectScope', 'unscoped'],
            exact: true,
          },
          {
            path: '/service/billing/spending-summary',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__SpendingSummary" */ '../billing/SpendingSummary'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/SpendingSummary').default,
            exact: true,
          },
          {
            path: '/service/billing/invoices',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__Invoice" */ '../billing/Invoice'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/Invoice').default,
            exact: true,
          },
          {
            path: '/service/billing/spend-by-service',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__CostByService" */ '../billing/CostByService'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/CostByService').default,
            exact: true,
          },
          {
            path: '/service/billing/monthly-spend',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__MonthlySpend" */ '../billing/MonthlySpend'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/MonthlySpend').default,
            exact: true,
          },
          {
            path: '/service/billing/analysis',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__Analysis" */ '../billing/Analysis'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/Analysis').default,
            exact: true,
          },
          {
            path: '/service/billing/usage-details',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__UsageDetails" */ '../billing/UsageDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/UsageDetails').default,
            exact: true,
          },
          {
            path: '/service/billing/ecs-usage',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__EcsUsage" */ '../billing/EcsUsage'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/EcsUsage').default,
            exact: true,
          },
          {
            path: '/service/billing/usage-report',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__UsageReportContainer" */ '../billing/UsageReportContainer'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/UsageReportContainer').default,
            exact: true,
          },
          {
            path: '/service/billing/rate-mappings',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__RateMappings" */ '../billing/RateMappings'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/RateMappings').default,
            exact: true,
          },
          {
            path: '/service/billing/pricing-plan',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__billing__Cloud7PricingPlan" */ '../billing/Cloud7PricingPlan'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../billing/Cloud7PricingPlan').default,
            exact: true,
          },
          {
            path: '/service/compute/elastic-cloud-services',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ElasticCloudServices__ElasticCloudServices" */ '../service/compute/ElasticCloudServices/ElasticCloudServices'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ElasticCloudServices/ElasticCloudServices')
                  .default,
            exact: true,
          },
          {
            authority: ['projectScope', 'unscoped'],
            path: '/service/compute/elastic-cloud-services/show-instance',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ElasticCloudServices__ECSDetails" */ '../service/compute/ElasticCloudServices/ECSDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ElasticCloudServices/ECSDetails')
                  .default,
            exact: true,
          },
          {
            path: '/service/compute/elastic-cloud-services/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ElasticCloudServices__CreateECS" */ '../service/compute/ElasticCloudServices/CreateECS'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ElasticCloudServices/CreateECS')
                  .default,
            exact: true,
          },
          {
            path: '/service/compute/image-management-services',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ImageManagementServices__ImageManagementServices" */ '../service/compute/ImageManagementServices/ImageManagementServices'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ImageManagementServices/ImageManagementServices')
                  .default,
            exact: true,
          },
          {
            path: '/service/compute/image-management-services/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ImageManagementServices__CreateIMS" */ '../service/compute/ImageManagementServices/CreateIMS'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ImageManagementServices/CreateIMS')
                  .default,
            exact: true,
          },
          {
            path: '/service/compute/image-management-services/show-image',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__ImageManagementServices__IMSDetails" */ '../service/compute/ImageManagementServices/IMSDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/ImageManagementServices/IMSDetails')
                  .default,
            exact: true,
          },
          {
            path: '/service/compute/flavors',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__Flavors__Flavors" */ '../service/compute/Flavors/Flavors'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/Flavors/Flavors').default,
            exact: true,
          },
          {
            path: '/service/compute/flavors/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__Flavors__CreateFlavor" */ '../service/compute/Flavors/CreateFlavor'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/Flavors/CreateFlavor').default,
            exact: true,
          },
          {
            path: '/service/compute/keypairs',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__Keypairs__Keypairs" */ '../service/compute/Keypairs/Keypairs'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/Keypairs/Keypairs').default,
            exact: true,
          },
          {
            path: '/service/compute/keypairs/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__compute__Keypairs__CreateKeypair" */ '../service/compute/Keypairs/CreateKeypair'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/compute/Keypairs/CreateKeypair').default,
            exact: true,
          },
          {
            path: '/service/network/networks',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__VirtualPrivateCloud__VirtualPrivateCloud" */ '../service/network/VirtualPrivateCloud/VirtualPrivateCloud'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/VirtualPrivateCloud/VirtualPrivateCloud')
                  .default,
            exact: true,
          },
          {
            path: '/service/network/networks/show-network',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__VirtualPrivateCloud__VPCDetails" */ '../service/network/VirtualPrivateCloud/VPCDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/VirtualPrivateCloud/VPCDetails')
                  .default,
            exact: true,
          },
          {
            path: '/service/network/networks/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__VirtualPrivateCloud__CreateVPC" */ '../service/network/VirtualPrivateCloud/CreateVPC'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/VirtualPrivateCloud/CreateVPC')
                  .default,
            exact: true,
          },
          {
            path: '/service/network/routers',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__Routers__Routers" */ '../service/network/Routers/Routers'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/Routers/Routers').default,
            exact: true,
          },
          {
            path: '/service/network/routers/show-router',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__Routers__RouterDetailsForEachElement" */ '../service/network/Routers/RouterDetailsForEachElement'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/Routers/RouterDetailsForEachElement')
                  .default,
            exact: true,
          },
          {
            path: '/service/network/routers/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__Routers__CreateRouter" */ '../service/network/Routers/CreateRouter'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/Routers/CreateRouter').default,
            exact: true,
          },
          {
            path: '/service/network/routers/add-interface',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__Routers__AddInterface" */ '../service/network/Routers/AddInterface'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/Routers/AddInterface').default,
            exact: true,
          },
          {
            path: '/service/network/security-groups',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__SecurityGroups__SecurityGroups" */ '../service/network/SecurityGroups/SecurityGroups'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/SecurityGroups/SecurityGroups')
                  .default,
            exact: true,
          },
          {
            path: '/service/network/security-groups/add-rule',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__SecurityGroups__AddRule" */ '../service/network/SecurityGroups/AddRule'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/SecurityGroups/AddRule').default,
            exact: true,
          },
          {
            path: '/service/network/security-groups/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__SecurityGroups__CreateSg" */ '../service/network/SecurityGroups/CreateSg'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/SecurityGroups/CreateSg').default,
            exact: true,
          },
          {
            path: '/service/network/floating-ips',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__FloatingIPs__FloatingIPs" */ '../service/network/FloatingIPs/FloatingIPs'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/FloatingIPs/FloatingIPs').default,
            exact: true,
          },
          {
            path: '/service/network/floating-ips/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__network__FloatingIPs__CreateFIP" */ '../service/network/FloatingIPs/CreateFIP'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/network/FloatingIPs/CreateFIP').default,
            exact: true,
          },
          {
            path: '/service/storage/elastic-volume-services',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__storage__ElasticVolumeServices__ElasticVolumeServices" */ '../service/storage/ElasticVolumeServices/ElasticVolumeServices'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/storage/ElasticVolumeServices/ElasticVolumeServices')
                  .default,
            exact: true,
          },
          {
            path: '/service/storage/snapshots',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__storage__SnapshotServices__Snapshots" */ '../service/storage/SnapshotServices/Snapshots'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/storage/SnapshotServices/Snapshots')
                  .default,
            exact: true,
          },
          {
            path: '/service/storage/snapshots/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__storage__SnapshotServices__CreateSnapshot" */ '../service/storage/SnapshotServices/CreateSnapshot'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/storage/SnapshotServices/CreateSnapshot')
                  .default,
            exact: true,
          },
          {
            path: '/service/storage/elastic-volume-services/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__storage__ElasticVolumeServices__CreateEVS" */ '../service/storage/ElasticVolumeServices/CreateEVS'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/storage/ElasticVolumeServices/CreateEVS')
                  .default,
            exact: true,
          },
          {
            path: '/service/settings/flavors',
            authority: ['domainScope', 'projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__settings__Flavors__Flavors" */ '../service/settings/Flavors/Flavors'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/settings/Flavors/Flavors').default,
            exact: true,
          },
          {
            path: '/service/settings/volumes',
            authority: ['domainScope', 'projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__settings__Evs__Evs" */ '../service/settings/Evs/Evs'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/settings/Evs/Evs').default,
            exact: true,
          },
          {
            path: '/service/settings/flavors/create',
            authority: ['domainScope', 'projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__settings__Flavors__CreateFlavor" */ '../service/settings/Flavors/CreateFlavor'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/settings/Flavors/CreateFlavor').default,
            exact: true,
          },
          {
            path: '/service/settings/volumes/create',
            authority: ['domainScope', 'projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__settings__Evs__CreateEvsPricing" */ '../service/settings/Evs/CreateEvsPricing'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/settings/Evs/CreateEvsPricing').default,
            exact: true,
          },
          {
            path: '/service/iam/account',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Users__profiles__Userprofile" */ '../service/iam/Users/profiles/Userprofile'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Users/profiles/Userprofile').default,
            exact: true,
          },
          {
            path: '/service/iam/roles',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Roles__Roles" */ '../service/iam/Roles/Roles'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Roles/Roles').default,
            exact: true,
          },
          {
            path: '/service/iam/roles/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Roles__CreateRole" */ '../service/iam/Roles/CreateRole'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Roles/CreateRole').default,
            exact: true,
          },
          {
            path: '/service/iam/projects',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Tenants__Tenants" */ '../service/iam/Tenants/Tenants'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Tenants/Tenants').default,
            exact: true,
          },
          {
            path: '/service/iam/projects/show-project',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Tenants__TenantDetails" */ '../service/iam/Tenants/TenantDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Tenants/TenantDetails').default,
            exact: true,
          },
          {
            path: '/service/iam/users/show-user',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Users__UserDetails" */ '../service/iam/Users/UserDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Users/UserDetails').default,
            exact: true,
          },
          {
            path: '/service/iam/projects/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Tenants__CreateTenant" */ '../service/iam/Tenants/CreateTenant'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Tenants/CreateTenant').default,
            exact: true,
          },
          {
            authority: ['projectScope', 'unscoped'],
            path: '/service/iam/users',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Users__Users" */ '../service/iam/Users/Users'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Users/Users').default,
            exact: true,
          },
          {
            path: '/service/iam/users/account',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Users__profiles__Userprofile" */ '../service/iam/Users/profiles/Userprofile'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Users/profiles/Userprofile').default,
            exact: true,
          },
          {
            path: '/service/iam/users/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Users__CreateUser" */ '../service/iam/Users/CreateUser'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Users/CreateUser').default,
            exact: true,
          },
          {
            path: '/service/iam/groups',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Groups__Groups" */ '../service/iam/Groups/Groups'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Groups/Groups').default,
            exact: true,
          },
          {
            path: '/service/iam/groups/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Groups__CreateGroup" */ '../service/iam/Groups/CreateGroup'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Groups/CreateGroup').default,
            exact: true,
          },
          {
            path: '/service/iam/roles',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Roles__Roles" */ '../service/iam/Roles/Roles'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Roles/Roles').default,
            exact: true,
          },
          {
            path: '/service/iam/roles/create',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Roles__CreateRole" */ '../service/iam/Roles/CreateRole'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Roles/CreateRole').default,
            exact: true,
          },
          {
            path: '/service/iam/groups/show-group',
            authority: ['projectScope', 'unscoped'],
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__service__iam__Groups__GroupDetails" */ '../service/iam/Groups/GroupDetails'),
                  LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                    .default,
                })
              : require('../service/iam/Groups/GroupDetails').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/home/shahrukh/ivolve/web-client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/home/shahrukh/ivolve/web-client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    Routes: [require('../Authorized').default],
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__DetasadCloudLayout" */ '../../layouts/DetasadCloudLayout'),
          LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/DetasadCloudLayout').default,
    routes: [
      {
        path: '/support',
        Routes: [require('../Authorized').default],
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__support__Support" */ '../support/Support'),
              LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                .default,
            })
          : require('../support/Support').default,
        authority: ['projectScope', 'unscoped'],
        exact: true,
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__dashboard__analysis" */ '../dashboard/analysis'),
              LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
                .default,
            })
          : require('../dashboard/analysis').default,
        authority: ['projectScope', 'unscoped'],
      },
      {
        component: () =>
          React.createElement(
            require('/home/shahrukh/ivolve/web-client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('/home/shahrukh/ivolve/web-client/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('/home/shahrukh/ivolve/web-client/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
