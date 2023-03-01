export const nav = [
  {
    name: 'E-commerce integration',
    link: 'index.html',
    subNavs: null,
  },
  {
    name: 'Authentication',
    link: 'auth.html',
    subNavs: null,
  },
  {
    name: 'Direct payments',
    link: 'direct-payments.html',
    subNavs: [
      {
        name: "Payment order, card data is collected on merchant's side (internal MPI)",
        hash: 'internal-mpi',
      },
      {
        name: "Payment for order, card data is collected on merchant's side (external MPI)",
        hash: 'external-mpi',
      },
      {
        name: "Payment order, card data is collected on merchant's side (internal MPI)",
        hash: 'instant-payment',
      },
      {
        name: 'MOTO payment',
        hash: 'moto-payment',
      },
    ],
  },
  {
    name: 'Subscriptions',
    link: 'subscription.html',
    subNavs: null,
  },
  {
    name: 'Callback',
    link: 'callback.html',
    subNavs: null,
  },
  {
    name: 'Test Cards',
    link: 'test-cards.html',
    subNavs: null,
  },
  {
    name: 'Statuses',
    link: 'statuses.html',
    subNavs: null,
  },
];
