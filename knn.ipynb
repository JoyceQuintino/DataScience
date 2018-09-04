{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 34,
   "metadata": {},
   "outputs": [],
   "source": [
    "import numpy as np\n",
    "from sklearn.preprocessing import LabelEncoder, OneHotEncoder, Imputer, MinMaxScaler\n",
    "from sklearn.cross_validation import train_test_split\n",
    "import pandas as pd\n",
    "import math"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 35,
   "metadata": {},
   "outputs": [],
   "source": [
    "url = \"https://archive.ics.uci.edu/ml/machine-learning-databases/mammographic-masses/mammographic_masses.data\"\n",
    "\n",
    "nameCol = ['BI-RADS assessment', 'Age', 'Shape', 'Margin', 'Density', 'Severity']\n",
    "\n",
    "dataset = pd.read_csv(url, names=nameCol)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 36,
   "metadata": {},
   "outputs": [],
   "source": [
    "#pré-processamento dos dados"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 37,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "pandas.core.frame.DataFrame"
      ]
     },
     "execution_count": 37,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "type(dataset)\n"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 38,
   "metadata": {},
   "outputs": [],
   "source": [
    "dataset = dataset.apply(lambda x: x.replace('?',np.nan))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 39,
   "metadata": {},
   "outputs": [],
   "source": [
    "previsores = dataset.iloc[:,0:5].values\n",
    "classe = dataset.iloc[:,5].values"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 40,
   "metadata": {},
   "outputs": [],
   "source": [
    "imputer = Imputer(missing_values='NaN', strategy='most_frequent', axis = 0)\n",
    "imputer = imputer.fit(previsores[:,0:5])\n",
    "previsores[:,0:5] = imputer.transform(previsores[:,0:5])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 41,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "array([[5.0, 67.0, 3.0, 5.0, 3.0],\n",
       "       [4.0, 43.0, 1.0, 1.0, 3.0],\n",
       "       [5.0, 58.0, 4.0, 5.0, 3.0],\n",
       "       ...,\n",
       "       [4.0, 64.0, 4.0, 5.0, 3.0],\n",
       "       [5.0, 66.0, 4.0, 5.0, 3.0],\n",
       "       [4.0, 62.0, 3.0, 3.0, 3.0]], dtype=object)"
      ]
     },
     "execution_count": 41,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "previsores"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 42,
   "metadata": {},
   "outputs": [],
   "source": [
    "onehotencoder = OneHotEncoder(categorical_features=[3,4])"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 43,
   "metadata": {},
   "outputs": [],
   "source": [
    "previsores = onehotencoder.fit_transform(previsores).toarray()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 44,
   "metadata": {},
   "outputs": [],
   "source": [
    "#escalonamento dos atributos"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 45,
   "metadata": {},
   "outputs": [],
   "source": [
    "scaler = MinMaxScaler()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 46,
   "metadata": {},
   "outputs": [],
   "source": [
    "previsores = scaler.fit_transform(previsores)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 47,
   "metadata": {},
   "outputs": [
    {
     "data": {
      "text/plain": [
       "array([[0.        , 0.        , 0.        , ..., 0.09090909, 0.62820513,\n",
       "        0.66666667],\n",
       "       [1.        , 0.        , 0.        , ..., 0.07272727, 0.32051282,\n",
       "        0.        ],\n",
       "       [0.        , 0.        , 0.        , ..., 0.09090909, 0.51282051,\n",
       "        1.        ],\n",
       "       ...,\n",
       "       [0.        , 0.        , 0.        , ..., 0.07272727, 0.58974359,\n",
       "        1.        ],\n",
       "       [0.        , 0.        , 0.        , ..., 0.09090909, 0.61538462,\n",
       "        1.        ],\n",
       "       [0.        , 0.        , 1.        , ..., 0.07272727, 0.56410256,\n",
       "        0.66666667]])"
      ]
     },
     "execution_count": 47,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "previsores"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 48,
   "metadata": {},
   "outputs": [],
   "source": [
    "#separação das bases"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 49,
   "metadata": {},
   "outputs": [],
   "source": [
    "x_train, x_test, y_train, y_test = train_test_split(previsores, classe, test_size=0.25, random_state=0)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 50,
   "metadata": {},
   "outputs": [],
   "source": [
    "rows, columns = x_train.shape\n",
    "temp = np.zeros((rows,columns+1))\n",
    "temp[:,:-1] = x_train\n",
    "temp[:,-1] = y_train\n",
    "\n",
    "x_train = temp"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 51,
   "metadata": {},
   "outputs": [],
   "source": [
    "rows2, columns2 = x_test.shape\n",
    "temp2 = np.zeros((rows2,columns2+1))\n",
    "temp2[:,:-1] = x_test\n",
    "temp2[:,-1] = y_test\n",
    "\n",
    "x_test = temp2"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 52,
   "metadata": {},
   "outputs": [],
   "source": [
    "#implementação do knn"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 58,
   "metadata": {},
   "outputs": [],
   "source": [
    "# Distância euclidiana\n",
    "def euclidianDis(x1, x2):\n",
    "    tam = len(x1) - 1\n",
    "    soma = 0\n",
    "    for i in range(tam):\n",
    "        soma += math.pow(x1[i] - x2[i], 2)\n",
    "    return math.sqrt(soma)"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 67,
   "metadata": {},
   "outputs": [],
   "source": [
    "# algoritmo knn\n",
    "def knn(train, instN, k):\n",
    "    class0 = 0 \n",
    "    class1 = 0\n",
    "    nei = {}\n",
    "    tamTrain = len(train)\n",
    "    \n",
    "    for i in range(tamTrain):\n",
    "        e = euclidianDis(train[i], instN)\n",
    "        nei[i] = e\n",
    "    kNeibo = sorted(nei, key = nei.get)[:k]\n",
    "    \n",
    "    for j in kNeibo:\n",
    "        if train[j][-1] == 0:\n",
    "            class0 += 1\n",
    "        elif train[j][-1] == 1:\n",
    "            class1 += 1\n",
    "    if class0 >= class1:\n",
    "        return 0\n",
    "    elif class0 < class1:\n",
    "        return 1\n",
    "    "
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 68,
   "metadata": {},
   "outputs": [],
   "source": [
    "acerto0 = 0\n",
    "erro0 = 0\n",
    "acerto1 = 0\n",
    "erro1 = 0\n",
    "k = 9"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 69,
   "metadata": {},
   "outputs": [],
   "source": [
    "# continuação do programa\n",
    "for sample in x_test:\n",
    "    clas = knn(x_train, sample, k)\n",
    "    if clas == 1:\n",
    "        if sample[-1] == clas:\n",
    "            acerto1 += 1\n",
    "        else:\n",
    "            erro1 += 1\n",
    "    else:\n",
    "        if sample[-1] == clas:\n",
    "            acerto0 += 1\n",
    "        else:\n",
    "            erro0 += 1"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 70,
   "metadata": {},
   "outputs": [
    {
     "name": "stdout",
     "output_type": "stream",
     "text": [
      "Taxa de acerto: 77.18%\n",
      "Taxa de erro: 22.82%\n",
      "Precisão - classe 0: 74.36%\n",
      "Precisão - classe 1: 79.84%\n"
     ]
    }
   ],
   "source": [
    "#métricas\n",
    "print('Taxa de acerto: %.2f%%' % (100 * (acerto1+acerto0) / len(x_test)))\n",
    "print('Taxa de erro: %.2f%%' % (100 * (erro1+erro0) / len(x_test)))\n",
    "print('Precisão - classe 0: %.2f%%' %(100 * acerto1/(acerto1+erro1)))\n",
    "print('Precisão - classe 1: %.2f%%' %(100 * acerto0/(acerto0+erro0)))"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
