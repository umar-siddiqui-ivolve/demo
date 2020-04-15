import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'account', ...(require('/home/shahrukh/ivolve/web-client/src/models/account.ts').default) });
app.model({ namespace: 'billing', ...(require('/home/shahrukh/ivolve/web-client/src/models/billing.js').default) });
app.model({ namespace: 'createECS', ...(require('/home/shahrukh/ivolve/web-client/src/models/createECS.js').default) });
app.model({ namespace: 'createVPC', ...(require('/home/shahrukh/ivolve/web-client/src/models/createVPC.js').default) });
app.model({ namespace: 'drawer', ...(require('/home/shahrukh/ivolve/web-client/src/models/drawer.js').default) });
app.model({ namespace: 'ecs', ...(require('/home/shahrukh/ivolve/web-client/src/models/ecs.js').default) });
app.model({ namespace: 'evs', ...(require('/home/shahrukh/ivolve/web-client/src/models/evs.js').default) });
app.model({ namespace: 'flavor', ...(require('/home/shahrukh/ivolve/web-client/src/models/flavor.js').default) });
app.model({ namespace: 'floatingip', ...(require('/home/shahrukh/ivolve/web-client/src/models/floatingip.js').default) });
app.model({ namespace: 'global', ...(require('/home/shahrukh/ivolve/web-client/src/models/global.js').default) });
app.model({ namespace: 'groups', ...(require('/home/shahrukh/ivolve/web-client/src/models/groups.js').default) });
app.model({ namespace: 'ims', ...(require('/home/shahrukh/ivolve/web-client/src/models/ims.js').default) });
app.model({ namespace: 'keypair', ...(require('/home/shahrukh/ivolve/web-client/src/models/keypair.js').default) });
app.model({ namespace: 'kms', ...(require('/home/shahrukh/ivolve/web-client/src/models/kms.js').default) });
app.model({ namespace: 'monitoring', ...(require('/home/shahrukh/ivolve/web-client/src/models/monitoring.js').default) });
app.model({ namespace: 'price', ...(require('/home/shahrukh/ivolve/web-client/src/models/price.js').default) });
app.model({ namespace: 'pricing', ...(require('/home/shahrukh/ivolve/web-client/src/models/pricing.js').default) });
app.model({ namespace: 'quotas', ...(require('/home/shahrukh/ivolve/web-client/src/models/quotas.js').default) });
app.model({ namespace: 'roles', ...(require('/home/shahrukh/ivolve/web-client/src/models/roles.js').default) });
app.model({ namespace: 'router', ...(require('/home/shahrukh/ivolve/web-client/src/models/router.js').default) });
app.model({ namespace: 'securitygroup', ...(require('/home/shahrukh/ivolve/web-client/src/models/securitygroup.js').default) });
app.model({ namespace: 'servicesLayout', ...(require('/home/shahrukh/ivolve/web-client/src/models/servicesLayout.js').default) });
app.model({ namespace: 'setting', ...(require('/home/shahrukh/ivolve/web-client/src/models/setting.js').default) });
app.model({ namespace: 'snapshot', ...(require('/home/shahrukh/ivolve/web-client/src/models/snapshot.js').default) });
app.model({ namespace: 'stats', ...(require('/home/shahrukh/ivolve/web-client/src/models/stats.js').default) });
app.model({ namespace: 'support', ...(require('/home/shahrukh/ivolve/web-client/src/models/support.js').default) });
app.model({ namespace: 'tenants', ...(require('/home/shahrukh/ivolve/web-client/src/models/tenants.js').default) });
app.model({ namespace: 'usageReport', ...(require('/home/shahrukh/ivolve/web-client/src/models/usageReport.js').default) });
app.model({ namespace: 'user', ...(require('/home/shahrukh/ivolve/web-client/src/models/user.js').default) });
app.model({ namespace: 'users', ...(require('/home/shahrukh/ivolve/web-client/src/models/users.js').default) });
app.model({ namespace: 'vpc', ...(require('/home/shahrukh/ivolve/web-client/src/models/vpc.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
