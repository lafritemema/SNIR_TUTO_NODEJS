function getOnlyLowerTen(nbr)
{
  if(Number.isInteger(nbr))
  {
    if(nbr<10)
    {
      return 'Voici votre nombre :'+nbr;
    }
    else {
      throw new RangeError('le nombre est superieur à 10');
    }
  }
  else
  {
      throw new TypeError("Le parametre n'est pas un nombre")
  } 
}

try{
    console.log(getOnlyLowerTen(5));
    //console.log(getOnlyLowerTen(12));
    console.log(getOnlyLowerTen('momo'));
}catch(e)
{
    if(e instanceof RangeError)
    {   
        console.log('range error')
    }
    else if(e instanceof TypeError)
    {
        console.log('type error');
        pass
    }
}
