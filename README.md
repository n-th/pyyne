# PYYNE Challenge

The idea is to create a simple bank aggregation application that pulls information from multiple different banks and displays it.

As you will see, there are two packages, "com.bank1" and "com.bank2" which represent proprietary API integration points towards these two hypothetical banks. They only return hardcoded dummy values and ignore input parameters, but I want you to imagine that they represent wrappers for external API calls. They both expose functionality to fetch account balances and transactions, but in slightly different ways. Your solution may not alter these classes.

You will also see that there is a class com.pyyne.challenge.bank.BankController which is the entry-point for you to start.

The challenge here is that we don’t want the BankController to ever directly use any classes in the com.bank1 and com.bank2 packages. Instead, you need to create an abstraction layer (using, for instance, an Adaptor pattern) that isolates and “hides” the bank1 and bank2 classes behind a common interface and data structures. Your solution should demonstrate appropriate separation of responsibilities and code isolation. A small hint, as there are different versions of the Adaptor pattern - the point is to create an abstraction that makes bank1 and bank2 look the same, not to create an adaptor that makes, for instance, bank1 look like bank2.

We would also like you to include relevant unit tests for the code you develop.


## Requirements

- yarn 1.22
- node v19.9

To execute the project go into the node folder, install the dependencies:

```bash
cd node/
yarn
yarn start
```

After installing the dependencies, you also can run the tests:

```bash
yarn test
```


