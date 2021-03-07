# Hemato-calc

## Methods to calcule body surface area

### Dubois

A = w ** 0.425 \* h ** 0.725 \* C

A being the surface area in square centimeters,
H the height in centimeters,
W the weight in kilograms and
C the constant, 71.84.

TODO: Revisar as unidades
TODO: Revisar essa constante
https://www.msdmanuals.com/medical-calculators/BodySurfaceArea-pt.htm

DuBois D, DuBois E.F. "A formula to estimate the approximate surface area if height and weight be known." Arch. Intern. Med. 17:862, 1916
DOI: 10.1001/archinte.1916.00080130010002

https://scihubtw.tw/10.1001/archinte.1916.00080130010002

### Mosteller, square root method

Área = Raiz quadrada(Altura \* Peso / 3600)

https://medicalsuite.einstein.br/Servicos/Paginas/calculadora-bodySurfaceArea.aspx

TODO: Achar o artigo

TODO: Comparar as técnicas

## Protocols

### CVP

1.  Nome - CVP (Ciclofosfamida, Vincristina, Prednisona)
2.  Indicações principais: Linfoma não Hodgkin baixo grau.
3.  Regime

    | Ordem infusão | Medicamento / dose / velocidade infusão                         | D1  | D2  | D3  | D4  | D5  |
    | :-----------: | --------------------------------------------------------------- | :-: | :-: | :-: | :-: | :-: |
    |       1       | Vincristina 1,2-1,4 mg/m<sup>2</sup> Ev lento (dose max.: 2 mg) |  Х  |     |     |     |     |
    |       2       | Ciclofosfamida 750 - 1000mg/m<sup>2</sup> Ev 1 hora             |  X  |     |     |     |     |
    |       3       | Prednisona 100mg/dia VO                                         |  X  |  X  |  X  |  X  |  X  |

4.  Freqüência: a cada 21 dias, 6 ou 8 ciclos
5.  Pré-medicação: ondansetrona 8mg 1amp pré-QT
6.  Potencial emetogêncio: MODERADO (30 - 90%)
7.  Medicamentos de suporte:

    - alopurinol 300mg/dia para prevenção de síndrome da lise tumoral
    - omeprazol 20mg/dia

8.  Ajuste de dose

    ***

    **a. Função renal**

    | Clearance creatinina (mL/min) |        Vincristina        | Ciclofosfamida  |
    | :---------------------------: | :-----------------------: | :-------------: |
    |            30 - 50            | Não requer ajuste de dose |      100%       |
    |            10 - 30            | Não requer ajuste de dose |    50 - 75%     |
    |             < 10              | Não requer ajuste de dose | 50 % ou omissão |

    ***

    **b. Função hepática**

    | Bilirrubinas                             | Vincristina | Ciclofosfamida |
    | ---------------------------------------- | ----------- | -------------- |
    | Aumento de 1-2 vezes limite superior     | 50%         | 100%           |
    | Aumento de 2-4 vezes limite superior     | 25%         | Atenção        |
    | Aumento maior de 4 vezes limite superior | omitir      | Atenção        |

    ***

    **c. Toxicidade hematológica e não-hematológica:**

    | Toxicidade                                                                    | Vincristina                                                     | Ciclofosfamida                      |
    | ----------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------- |
    | Toxicidade hematológica grau 4 >= 7 dias,</br>neutropenia febril, sangramento | 100%                                                            | 75% ou filgrastima (em neutropenia) |
    | Toxicidade não hematológica grau 3                                            | 100%                                                            | 75%                                 |
    | Toxicidade orgânica grau 4                                                    | descontinuar                                                    | descontinuar                        |
    | Neurotoxicidade                                                               | **Leve**: 67%</br>**Moderada**: Aguardar recuperação, reiniciar | 100%                                |

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
