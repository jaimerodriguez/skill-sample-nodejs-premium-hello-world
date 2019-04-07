const Alexa = require(`ask-sdk`);
const skillName = "Premium Hello World";
const ACTIVEREFERENCENAME = 'Premium_Greeting_OTP' ; 

const strings =  Object.freeze (  
{ 
  "en-US" : 
   { 
      "Welcome" :  `Welcome. To hear a greeting, you can say hello, or to hear about the premium categories for purchase, say 'What can I buy'. For help, say , 'Help me'... So, What can I help you with?'` , 
      "Help" : `You can say hello to me! How can I help?`  , 
      "YesNoQuestions" : [
        "Would you like another greeting?",
        "Can I give you another greeting?",
        "Do you want to hear another greeting?"
      ] , 
      "Goodbyes" :  [ 
        "OK.  Goodbye!",
        "Have a great day!",
        "Come back again soon!"
      ], 
      "Greetings" : ["Howdy!", "Hello!", "How are you?", "Hiya!"] , 
      "UnlockedAccepted" : "You have unlocked the Premium Greeting Pack. Here's your Premium greeting: {0}! That's hello in {1}." ,  
      "UpsellMessage" : "Here's your standard greeting: {0} <break /> {1}"  , 
      "PremiumGreetings" : [
        { language: "hindi", greeting: "Namaste" },
        { language: "french", greeting: "Bonjour" },
        { language: "spanish", greeting: "Hola" },
        { language: "japanese", greeting: "Konichiwa" },
        { language: "italian", greeting: "Ciao" }
      ] , 
      "DeclinedPrompt" : "Thanks for your interest in {0}. {1}" , 
      "StandardGreetingPrompt" : "Would you like to listen to the standard greeting?" , 
      "DeclinedUpsellPrompt" : "Here's your standard greeting {0}. {1}" , 
      "AnotherGreetingPrompt" : "Would you like another greeting", 
      "AlreadyPurchasedPrompt" : "You already own the {0}. Here's the premium greeting: {1}!  That's hello in {2}. {3}" , 
      "UnexpectedPurchaseResult"  : "Something unexpected happened, but thanks for your interest in the {0}.  {1} " , 
      "AnotherRandomGreetingPrompt" : "Would you like another random greeting?" ,        
      "ErrorPurchasingRetryPrompt" : "There was an error handling your purchase request. Please try again or contact us for help."  , 
      "ContactSupport" : "You will find details for contacting customer support in the card. ",   
      "LearnMore"  :  [
        "Want to learn more about it?",
        "Should I tell you more about it?",
        "Want to learn about it?",
        "Interested in learning more about it?"
      ], 
      "DisplayNameToIds" :   [ 
        {  "term" : "consumable"  , "reference_name" : "Premium_Greeting_Consumable" }, 
        { "term" : "subscription" , "reference_name" : "Premium_Greeting_Subscription" } , 
        { "term" : "otp|one time|dto" , "reference_name" : "Premium_Greeting_OTP" }
      ], 
      "SorryRepeat" : `Sorry, I couldn't understand what you said. Please try again.`, 
      "NoProducts" : `There are no products to offer to you right now. Sorry about that. Would you like a greeting instead?`, 
      "RepeatResponse" : `I didn't catch that. What can I help you with?`,  
      "PremiumGreetingSpoken" : "Here's your premium greeting: {0}. That's hello in {1}. {2}" , 
      "UpsellPrompt" : "You don't currently own the Premium Greeting pack: {0}. {1}" , 
      "PurchasedResponse" : "You have bought the following items: {0}. " , 
      "NoPurchases" : "You haven't purchased anything yet." , 
      "NoPurchasesReprompt" : "`You asked me for a what you've bought, but you haven't purchased anything yet. You can say - what can I buy, or say yes to get another greeting.",  
    }, 
   "es-US" : 
   { 
      "Welcome" :  "Bienvenido. Di Hola, o  di que puedo comprar. Que quieres hacer" , 
      "Help" : "Ayuda" , 
      "YesNoQuestions" : [
        "Quieres otro saludo?",
        "Gustas otro saludo?",
        "Quieres oir otro saludo?"
      ], 
      "Goodbyes" :  [ 
        "OK.  Goodbye!",
        "Have a great day!",
        "Come back again soon!"
      ], 
      "Greetings" : ["Hola!", "Si!", "Como estas?", "Que onda?"],
      "UnlockedAccepted" : "Has adquirido  saludos premium, como {0}! Eso es hola en {1}."  , 
      "UpsellMessage" : "Aqui esta tu saludo: {0} <break /> {1}"  , 
      "PremiumGreetings" : [
        { language: "hindi", greeting: "Namaste" },
        { language: "frances", greeting: "Bonjour" },
        { language: "espanol", greeting: "Hola" },
        { language: "japones", greeting: "Konichiwa" },
        { language: "italiano", greeting: "Ciao" }
      ],
      "DeclinedPrompt" : "Gracias por tu interes en {0}. {1}" , 
      "StandardGreetingPrompt" : "Quieres oir un saludo standard?" ,   
      "DeclinedUpsellPrompt" : "Aqui esta un saludo standard {0}. {1}" , 
      "AnotherGreetingPrompt" : "Quieres otro saludo?",             
      "AlreadyPurchasedPrompt" : "Ya eras dueno de {0}. Aqui esta el saludo premium: {1}!  Eso es hola en {2}. {3}" , 
      "UnexpectedPurchaseResult"  : "Hubo un error. Gracias por tu interes en {0}.  {1} " , 
      "AnotherRandomGreetingPrompt" : "Quieres otro saludo?" , 
      "ErrorPurchasingRetryPrompt" : "Hubo un error. Por favor intenta de nuevo o contactanos si el error persiste." , 
      "ContactSupport" : "Los detalles para contactarnos estan en la tarjeta.", 
      "LearnMore"  :  [
        "Quieres mas detalles?",
        "Quieres mas informaction?",
        "Quieres escuchar mas detalles?",
        "Estas interesado en mas informacion"
      ], 
      "DisplayNameToIds" : [ 
        {  "term" : "consumable"  , "reference_name" : "Premium_Greeting_Consumable" }, 
        { "term" : "subscription" , "reference_name" : "Premium_Greeting_Subscription" } , 
        { "term" : "otp|one time|dto" , "reference_name" : "Premium_Greeting_OTP" }
      ], 
      "SorryRepeat" : `Disculpa, no entendi lo que dijiste. Intentalo una vez mas.`, 
      "NoProducts" : `No hay productos para ofrecerle en este momento..  Quieres un saludo?`, 
      "RepeatResponse" : `No entendí. En que te puedo ayudar?`,  
      "PremiumGreetingSpoken" : "Aqui esta tu saludo primo: {0}. Eso es 'hola' en {1}. {2}" , 
      "UpsellPrompt" : "Actualmente no tienes el paquete de saludo premium: {0}. {1}" , 
      "PurchasedResponse" : "Has comprado los siguientes artículos: {0}. " , 
      "NoPurchases" : "Aún no has comprado nada. " , 
      "NoPurchasesReprompt" : "Preguntaste que has comprado, pero no has comprado ningun producto. Puedes decir 'que he comprado' o decir 'Si' para oir un saludo. " ,  
   }
}); 


const stringFormat = function ( foundation  ,  ...args ) 
{ 
  let retval = foundation  ;
  for ( let x = 0; x < args.length ; x++ ) 
  {      
    retval = retval.replace( `{${x}}`, args[x]) ; 
  } 
  return retval ; 

};

function getRandomElement ( stringArray ) 
{ 
  return stringArray[Math.floor( Math.random()*stringArray.length)]; 
}




const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === `LaunchRequest`;
  },
  handle(handlerInput) {
    
    const speakOutput =  activeStringProvider.Welcome ;
    let response = handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
    return response;
  }
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === `IntentRequest` &&
      handlerInput.requestEnvelope.request.intent.name === `AMAZON.HelpIntent`
    );
  },
  handle(handlerInput) {
    const speakOutput = activeStringProvider.Help;
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
};


const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === `IntentRequest` &&
      (handlerInput.requestEnvelope.request.intent.name === `AMAZON.CancelIntent` ||
        handlerInput.requestEnvelope.request.intent.name === `AMAZON.StopIntent`)
    );
  },
  handle(handlerInput) {
    const speakOutput =   getRandomElement( activeStringProvider.Goodbyes);   
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.getResponse();
  }
};

const WelcomeIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "WelcomeIntent"
    );
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const isUpsellNeeded = sessionAttributes.shouldUpsell; 
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      return checkForProductAccess(handlerInput, result, isUpsellNeeded);
    });
  }
};


// IF THE USER SAYS YES, THEY WANT ANOTHER GREETING.
const AnotherGreetingHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.YesIntent"
    );
  },
  handle(handlerInput) { 
     

    //Instantiate a new MonetizationServiceClient object to invoke the inSkillPurchaseAPI
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();

    //Check if upsell should be done. You can set your own upsell timing logic inside the shouldUpsell() function.
    const isUpsellNeeded = false;

    //Get list of products the customer has bought, and then respond accordingly
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      //Pass the handlerInput, list of products customer has access to (result), and the flag for upsell to the helper function checkForProductAccess to determine the response.
      let response = checkForProductAccess( handlerInput, result, isUpsellNeeded);
      return response;
    });
  }
};
const AnotherGreetingWithUpsellHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.YesIntent" &&
      handlerInput.attributesManager.getSessionAttributes().shouldUpsell === true );
  },
  handle(handlerInput) {     
     
    //Instantiate a new MonetizationServiceClient object to invoke the inSkillPurchaseAPI
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();

    //Check if upsell should be done. You can set your own upsell timing logic inside the shouldUpsell() function.
    const isUpsellNeeded = true;

    //Get list of products the customer has bought, and then respond accordingly
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      //Pass the handlerInput, list of products customer has access to (result), and the flag for upsell to the helper function checkForProductAccess to determine the response.
      let response = checkForProductAccess( handlerInput, result, isUpsellNeeded );
      //Modify the Upsell message so we hear a standard greeting before it
      const originalUpsellMessage =  response.directives[0].payload.upsellMessage;

      // const newUpsellMessage = `Here's your standard greeting: ${getStandardGreeting()} <break/> ${originalUpsellMessage}`;       
      const newUpsellMessage = stringFormat ( activeStringProvider.UpsellMessage ,  getRandomElement(activeStringProvider.Greetings) , originalUpsellMessage ) ;

      // Setting a Session Attribute to keep track of the number of times the customer has said heard a standard greeting.
      // We will use this to determine if an upsell is required.
      const attributeNameToIncrement = `numberOfStandardGreetingsOfferedInThisSession`;
      incrementCountInSession(handlerInput, attributeNameToIncrement);
      response.directives[0].payload.upsellMessage = newUpsellMessage;
      return response;
    });
  }
};
// IF THE USER SAYS NO, THEY DON'T WANT ANOTHER GREETING.  EXIT THE SKILL.
const NoIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" 
      &&  handlerInput.requestEnvelope.request.intent.name === "AMAZON.NoIntent"
    );
  },  
  handle(handlerInput) {
    const speakOutput =  getRandomGoodbye();  
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  }
};
const BuyIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "BuyIntent"
    );
  },
  handle(handlerInput) { 

    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      const premiumProduct = result.inSkillProducts.filter( record => record.referenceName === ACTIVEREFERENCENAME  );
      return handlerInput.responseBuilder
        .addDirective({
          type: "Connections.SendRequest",
          name: "Buy",
          payload: {
            InSkillProduct: {
              productId: premiumProduct[0].productId
            }
          },
          token: JSON.stringify(sessionAttributes)
        })
        .getResponse();
    });
  }
};
const RefundIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RefundIntent"
    );
  },
  handle(handlerInput) {     
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      const premiumProduct = result.inSkillProducts.filter(
        record => record.referenceName === ACTIVEREFERENCENAME 
      );
      return handlerInput.responseBuilder
        .addDirective({
          type: "Connections.SendRequest",
          name: "Cancel",
          payload: {
            InSkillProduct: {
              productId: premiumProduct[0].productId
            }
          },
          token: JSON.stringify(sessionAttributes)
        })
        .getResponse();
    });
  }
};


const PremiumGreetingHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      (handlerInput.requestEnvelope.request.intent.name ===  "PremiumGreetingIntent" || handlerInput.requestEnvelope.request.intent.name === "BuyIntent"));
  },
  handle(handlerInput) {     
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    const isUpsellNeeded = true;
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      return checkForProductAccess(handlerInput, result, isUpsellNeeded);
    });
  }
};

// THIS HANDLES THE CONNECTIONS.RESPONSE EVENT AFTER A BUY or UPSELL OCCURS.
const ConnectionsResponseHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "Connections.Response" &&
      (handlerInput.requestEnvelope.request.name === "Buy" ||
        handlerInput.requestEnvelope.request.name === "Upsell")
    );
  },
  handle(handlerInput) {     
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    const productId = handlerInput.requestEnvelope.request.payload.productId;
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      handlerInput.attributesManager.setSessionAttributes( JSON.parse(handlerInput.requestEnvelope.request.token));
      if (handlerInput.requestEnvelope.request.status.code === "200") {
        let speakOutput;
        let repromptOutput;
        let theGreeting;
        const premiumProduct = result.inSkillProducts.filter(
          record => record.productId === productId
        );
        switch (handlerInput.requestEnvelope.request.payload.purchaseResult) {
          case "ACCEPTED":
            theGreeting = getRandomElement (activeStringProvider.PremiumGreetings);              
            speakOutput = stringFormat ( activeStringProvider.UnlockedAccepted ,  theGreeting["greeting"], theGreeting["language"] ,  getRandomElement (activeStringProvider.YesNoQuestions) );
            
            const attributeNameToSave = `entitledProducts`;
            saveToSession(handlerInput, attributeNameToSave, premiumProduct);
            repromptOutput = getRandomElement( activeStringProvider.YesNoQuestions);
            // resetting the count of standard greetings to avoid hitting upsell logic
            const secondAttributeNameToSave = `numberOfStandardGreetingsOfferedInThisSession`;
            const numberOfStandardGreetingsOfferedInThisSession = 1;
            saveToSession( handlerInput, secondAttributeNameToSave, numberOfStandardGreetingsOfferedInThisSession );
            break;
          case "DECLINED":
            if (handlerInput.requestEnvelope.request.name === "Buy") {
              // response when declined buy request              
              speakOutput = stringFormat ( activeStringProvider.DeclinedPrompt , premiumProduct[0].name, activeStringProvider.StandardGreetingPrompt) ; 
              repromptOutput = activeStringProvider.StandardGreetingPrompt ;  
              break;
            }

            // response when declined upsell request
            

            speakOutput  = stringFormat (  activeStringProvider.DeclinedUpsellPrompt,  getRandomElement(activeStringProvider.Greetings), activeStringProvider.AnotherGreetingPrompt ); 
            // speakOutput = `Here's your standard greeting: ${getStandardGreeting()} Would you like another greeting?`;
            // Setting a Session Attribute to keep track of the number of times the customer has said heard a standard greeting.
            // We will use this to determine if an upsell is required.
            const attributeNameToIncrement = `numberOfStandardGreetingsOfferedInThisSession`;
            incrementCountInSession(handlerInput, attributeNameToIncrement);
            repromptOutput = activeStringProvider.AnotherGreetingPrompt ;
            break;

          case "ALREADY_PURCHASED":
            theGreeting = getPremiumGreeting();
            let randomYesNo = getRandomElement(activeStringProvider.YesNoQuestions);             
            speakOutput = stringFormat ( activeStringProvider.AlreadyPurchasedPrompt , premiumProduct[0].name, theGreeting["greeting"], theGreeting["language"], randomYesNo) ;             
            repromptOutput = randomYesNo ;
            break;
          default:
            speakOutput = stringFormat ( activeStringProvider.UnexpectedPurcahseResult, premiumProduct[0].name, activeStringProvider.anotherRandomGreetingPrompt); 
            repromptOutput = activeStringProvider.anotherRandomGreetingPrompt ; 
            break;
        }
        return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(repromptOutput)
          .getResponse();
      }
      // Something failed.
      console.error(`Connections.Response indicated failure. error: ${handlerInput.requestEnvelope.request.status.message  }`);
      return handlerInput.responseBuilder
        .speak( activeStringProvider.ErrorPurchasingRetryPrompt )
        .getResponse();
    });
  }
};


const CancelfromConnectionsHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "Connections.Response" &&
      handlerInput.requestEnvelope.request.name === "Cancel"
    );
  },
  handle(handlerInput) {
    // Since the skill only has entitlements we cannot refund ourselves.
    // Directing to customer support, the customer already got a card from the Monetization service
   // const speakOutput = `You will find details for contacting customer support in the card. ${getRandomGoodbye()}.`;   
    const speakOutput = activeStringProvider.ContactSupport + getRandomElement(activeStringProvider.Goodbyes); 
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  }
};
// Following handler demonstrates how skills can handle user requests to discover what
// products are available for purchase in-skill.
// Use says: Alexa, ask Greetings helper what can I buy
const WhatCanIBuyHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "WhatCanIBuyIntent"
    );
  },
  handle(handlerInput) {
    // Inform the user about what products are available for purchase     
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    return monetizationClient
      .getInSkillProducts(activeLocale)
      .then(function fetchPurchasableProducts(result) {
        const purchasableProducts = result.inSkillProducts.filter(
          record =>
            record.entitled === "NOT_ENTITLED" &&
            record.purchasable === "PURCHASABLE"
        );
        if (purchasableProducts.length > 0) {
          const speakOutput = `Products available for purchase at this time are ${getSpeakableListOfProducts(purchasableProducts)}. To learn more about a product, say 'Tell me more about' followed by the product name. If you are ready to buy, say, 'Buy' followed by the product name. So what can I help you with?`;
          const repromptOutput = `I didn't catch that. What can I help you with?`;
          return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
        }
        
        const speakOutput =  activeStringProvider.NoProducts  ;
        const repromptOutput =  activeStringProvider.RepeatResponse  ;
        return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(repromptOutput)
          .getResponse();
      });
  }
};
const PurchaseHistoryHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name ===
        "PurchaseHistoryIntent"
    );
  },
  handle(handlerInput) {
    
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient();
    return monetizationClient.getInSkillProducts(activeLocale).then(function(result) {
      const entitledProducts = getAllEntitledProducts(result.inSkillProducts);
      
      
        

      if (entitledProducts && entitledProducts.length > 0) {
        const speakOutput =  stringFormat(activeStringProvider.PurchasedResponse , getSpeakableListOfProducts(entitledProducts));  
        const repromptOutput = getRandomYesNoQuestion();
        speakOutput += repromptOutput ;  
        return handlerInput.responseBuilder
          .speak(speakOutput)
          .reprompt(repromptOutput)
          .getResponse();
      }
      const speakOutput = activeStringProvider.NoPurchases ;
      const repromptOutput =  activeStringProvider.NoPurchasesReprompt ;

      return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(repromptOutput)
        .getResponse();
    });
  }
};
// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or added it in the skill builder below.
const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.error(`~~~~ Error handled: ${error.stack}`);    
    const speechText = activeStringProvider.SorrryRepeat;  

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};
/*
   Helper function that returns a speakable list of product names from a list of
   entitled products.
*/
function getSpeakableListOfProducts(entitleProductsList) {
  const productNameList = entitleProductsList.map(item => item.name);
  let productListSpeech = productNameList.join(", "); // Generate a single string with comma separated product names
  productListSpeech = productListSpeech.replace(/_([^_]*)$/, "and $1"); // Replace last comma with an 'and '
  return productListSpeech;
}
function getStandardGreeting( ) {
  return getRandomElement( activeStringProvider.Greetings);  
}

function getPremiumGreeting() {
   return getRandomElement(activeStringProvider.PremiumGreetings); 
}
function getRandomGoodbye() { 
  return getRandomElement(activeStringProvider.Goodbyes); 
}

function isProduct(product) {
  return product && product.length > 0;
}
function isEntitled(product) {
  return isProduct(product) && product[0].entitled === "ENTITLED";
}

function getResponseBasedOnAccessType(
  handlerInput,
  premiumProduct,
  isUpsellNeeded
) {
  const repromptOutput = getRandomYesNoQuestion();
  //Customer has bought the Premium Product. Return the response with Premium Greeting.
  if (isEntitled(premiumProduct)) {
    const theGreeting = getPremiumGreeting();
    
    const speakOutput = stringFormat  ( activeStringProvider.PremiumGreetingSpoken , theGreeting["greeting"], theGreeting["language"], getRandomYesNoQuestion())
    const attributeNameToSave = `entitledProducts`;
    saveToSession(handlerInput, attributeNameToSave, premiumProduct);

    let response = handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(repromptOutput)
      .getResponse();
    return response;
  }
  //Customer has not bought the Premium Product. Upsell should be made.
  if (isUpsellNeeded) {    
    const upsellMessage = stringFormat ( activeStringProvider.UpsellPrompt , premiumProduct[0].summary , getRandomLearnMorePrompt() );     
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    return handlerInput.responseBuilder
      .addDirective({
        type: "Connections.SendRequest",
        name: "Upsell",
        payload: {
          InSkillProduct: {
            productId: premiumProduct[0].productId
          },
          upsellMessage
        },
        token: JSON.stringify(sessionAttributes)
      })
      .getResponse();
  }
  //Customer has not bought the Premium Product. Upsell should not be done.
  const speakOutput = `Here's your Standard Greeting: ${getStandardGreeting()} ${getRandomYesNoQuestion()}`;
  // Setting a Session Attribute to keep track of the number of times the customer has said heard a standard greeting.
  // We will use this to determine if an upsell is required.
  const attributeNameToIncrement = `numberOfStandardGreetingsOfferedInThisSession`;
  incrementCountInSession(handlerInput, attributeNameToIncrement);
  return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt(repromptOutput)
    .getResponse();
}
function checkForProductAccess(handlerInput, result, isUpsellNeeded) {
  const premiumProduct = result.inSkillProducts.filter(
    record => record.referenceName === ACTIVEREFERENCENAME
  );
  const response = getResponseBasedOnAccessType(
    handlerInput,
    premiumProduct,
    isUpsellNeeded
  );
  return response;
}
function getRandomYesNoQuestion( ) {
  return getRandomElement ( activeStringProvider.YesNoQuestions );  
}

function getRandomLearnMorePrompt() {

  return getRandomElement( activeStringProvider.LearnMore);  
}
function saveToSession(handlerInput, attributeNameToSave, fieldValue) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  sessionAttributes[attributeNameToSave] = fieldValue;
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}
function shouldUpsell(handlerInput) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const numberOfStandardGreetingsOfferedInThisSession =
    sessionAttributes.numberOfStandardGreetingsOfferedInThisSession;
  if (numberOfStandardGreetingsOfferedInThisSession % 2 === 0) {
    return true;
  }
  return false;
}
function incrementCountInSession(handlerInput, attributeNameToIncrement) {
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const currentValue = sessionAttributes[attributeNameToIncrement];
  let newValue;
  if (currentValue === null || currentValue === undefined) {
    newValue = 1;
  } else {
    newValue = currentValue + 1;
  }
  saveToSession(handlerInput, attributeNameToIncrement, newValue);
}
function getAllEntitledProducts(inSkillProductList) {
  const entitledProductList = inSkillProductList.filter(
    record => record.entitled === "ENTITLED"
  );
  return entitledProductList;
}
const LogResponseInterceptor = {
  process(handlerInput) {
    console.log(
      `RESPONSE = ${JSON.stringify(handlerInput.responseBuilder.getResponse())}`
    );
  }
};
const LogRequestInterceptor = {
  process(handlerInput) {
    console.log(
      `REQUEST ENVELOPE = ${JSON.stringify(handlerInput.requestEnvelope)}`
    );
  }
};

let activeLocale = 'en-US'; 
let activeStringProvider = strings[activeLocale]; 

const LocalizationInterceptor =  { 
  process (handlerInput) { 
    activeLocale = handlerInput.requestEnvelope.request.locale ; 
    activeStringProvider = strings[activeLocale] ; 
  }
}; 


const UpSellInterceptor = {
  process(handlerInput) {
    const attributeNameToSave = `shouldUpsell`;
    let fieldValue = false;
    if (shouldUpsell(handlerInput)) {
      fieldValue = true;
    }
    saveToSession(handlerInput, attributeNameToSave, fieldValue);
  }
};
// This is the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.standard()
  .addRequestHandlers(
    CancelfromConnectionsHandler,
    ConnectionsResponseHandler,
    LaunchRequestHandler,
    AnotherGreetingWithUpsellHandler,
    AnotherGreetingHandler,
    NoIntentHandler,
    WelcomeIntentHandler,
    BuyIntentHandler,
    PremiumGreetingHandler,
    WhatCanIBuyHandler,
    PurchaseHistoryHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    RefundIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .addRequestInterceptors (LocalizationInterceptor) 
  .addRequestInterceptors(LogRequestInterceptor, UpSellInterceptor)
  .addResponseInterceptors(LogResponseInterceptor)
  .lambda();
