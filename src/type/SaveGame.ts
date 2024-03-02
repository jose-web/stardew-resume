// To parse this data:
//
//   import { Convert, SaveGame } from "./file";
//
//   const saveGame = Convert.toSaveGame(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SaveGame {
    player:                          Player;
    locations:                       Locations;
    currentSeason:                   CurrentSeason;
    samBandName:                     string;
    elliottBookName:                 string;
    broadcastedMail:                 BroadcastedMail;
    worldStateIDs:                   BroadcastedMail;
    lostBooksFound:                  string;
    goldenWalnuts:                   string;
    goldenWalnutsFound:              string;
    miniShippingBinsObtained:        string;
    mineShrineActivated:             string;
    goldenCoconutCracked:            string;
    parrotPlatformsUnlocked:         string;
    farmPerfect:                     string;
    foundBuriedNuts:                 BroadcastedMail;
    visitsUntilY1Guarantee:          string;
    shuffleMineChests:               string;
    dayOfMonth:                      string;
    year:                            string;
    farmerWallpaper:                 string;
    FarmerFloor:                     string;
    currentWallpaper:                string;
    currentFloor:                    string;
    currentSongIndex:                string;
    countdownToWedding:              string;
    incubatingEgg:                   IncubatingEgg;
    chanceToRainTomorrow:            string;
    dailyLuck:                       string;
    uniqueIDForThisGame:             string;
    weddingToday:                    string;
    isRaining:                       string;
    isDebrisWeather:                 string;
    shippingTax:                     string;
    isLightning:                     string;
    isSnowing:                       string;
    shouldSpawnMonsters:             string;
    hasApplied1_3_UpdateChanges:     string;
    hasApplied1_4_UpdateChanges:     string;
    musicVolume:                     string;
    soundVolume:                     string;
    cropsOfTheWeek:                  CropsOfTheWeek;
    dishOfTheDay:                    DishOfTheDay;
    highestPlayerLimit:              string;
    moveBuildingPermissionMode:      string;
    locationWeather:                 LocationWeather;
    bannedUsers:                     string;
    bundleData:                      BundleData;
    limitedNutDrops:                 LimitedNutDrops;
    latestID:                        string;
    options:                         Options;
    splitscreenOptions:              string;
    CustomData:                      string;
    mine_permanentMineChanges:       MinePermanentMineChanges;
    mine_lowestLevelReached:         string;
    minecartHighScore:               string;
    weatherForTomorrow:              string;
    whichFarm:                       string;
    mine_lowestLevelReachedForOrder: string;
    skullCavesDifficulty:            string;
    minesDifficulty:                 string;
    currentGemBirdIndex:             string;
    junimoKartLeaderboards:          JunimoKartLeaderboards;
    specialOrders:                   SpecialOrders;
    availableSpecialOrders:          AvailableSpecialOrders;
    completedSpecialOrders:          BroadcastedMail;
    acceptedSpecialOrderTypes:       string;
    returnedDonations:               string;
    junimoChest:                     string;
    collectedNutTracker:             BroadcastedMail;
    farmerFriendships:               string;
    cellarAssignments:               CellarAssignments;
    lastAppliedSaveFix:              string;
    gameVersion:                     string;
    gameVersionLabel:                string;
}

export interface AvailableSpecialOrders {
    SpecialOrder: SpecialOrderElement[];
}

export interface SpecialOrderElement {
    preSelectedItems:       string;
    selectedRandomElements: PreSelectedItems | string;
    objectives:             ObjectivesObjective[] | ObjectivesClass;
    generationSeed:         string;
    seenParticipantsIDs:    string;
    participantsIDs:        string;
    unclaimedRewardsIDs:    string;
    appliedSpecialRules:    string;
    rewards:                Reward[] | RewardsClass;
    questKey:               string;
    questName:              string;
    questDescription:       string;
    requester:              string;
    orderType:              string;
    specialRule:            string;
    readyForRemoval:        string;
    itemToRemoveOnEnd:      string;
    dueDate:                string;
    duration:               string;
    questState:             string;
}

export interface ObjectivesObjective {
    currentCount:             string;
    maxCount:                 string;
    description:              string;
    failOnCompletion:         string;
    acceptableContextTagSets: string;
    dropBox?:                 string;
    dropBoxGameLocation?:     string;
    dropBoxTileLocation?:     IncubatingEgg;
    minimumCapacity?:         string;
    confirmed?:               string;
}

export interface IncubatingEgg {
    X: string;
    Y: string;
}

export interface ObjectivesClass {
    currentCount:     string;
    maxCount:         string;
    description:      string;
    failOnCompletion: string;
    targetNames?:     string;
}

export interface Reward {
    amount?:       MaxEntries;
    multiplier?:   Scale;
    noLetter?:     SleptInTemporaryBed;
    grantedMails?: Mailbox;
    host?:         SleptInTemporaryBed;
}

export interface MaxEntries {
    int: string;
}

export interface Mailbox {
    string: string;
}

export interface SleptInTemporaryBed {
    boolean: string;
}

export interface Scale {
    float: string;
}

export interface RewardsClass {
    amount: MaxEntries;
}

export interface PreSelectedItems {
    item: PreSelectedItemsItem;
}

export interface PreSelectedItemsItem {
    key:   Mailbox;
    value: MaxEntries;
}

export interface BroadcastedMail {
    string: string[];
}

export interface BundleData {
    item: BundleDataItem[];
}

export interface BundleDataItem {
    key:   Mailbox;
    value: Mailbox;
}

export interface CellarAssignments {
    item: CellarAssignmentsItem;
}

export interface CellarAssignmentsItem {
    key:   MaxEntries;
    value: OwnerUIDClass;
}

export interface OwnerUIDClass {
    long: string;
}

export interface CropsOfTheWeek {
    int: string[];
}

export enum CurrentSeason {
    Fall = "fall",
    Spring = "spring",
    Summer = "summer",
    Winter = "winter",
}

export interface DishOfTheDay {
    isLostItem:                        string;
    category:                          string;
    hasBeenInInventory:                string;
    name:                              string;
    parentSheetIndex:                  string;
    specialItem:                       string;
    SpecialVariable:                   string;
    DisplayName:                       string;
    Name:                              string;
    Stack:                             string;
    tileLocation:                      IncubatingEgg;
    owner:                             string;
    type?:                             DishOfTheDayType;
    canBeSetDown:                      string;
    canBeGrabbed:                      string;
    isHoedirt:                         string;
    isSpawnedObject:                   string;
    questItem:                         string;
    questId:                           string;
    isOn:                              string;
    fragility:                         string;
    price:                             string;
    edibility:                         string;
    stack:                             string;
    quality:                           string;
    bigCraftable:                      string;
    setOutdoors:                       string;
    setIndoors:                        string;
    readyForHarvest:                   string;
    showNextIndex:                     string;
    flipped:                           string;
    hasBeenPickedUpByFarmer:           string;
    isRecipe:                          string;
    isLamp:                            string;
    minutesUntilReady:                 string;
    boundingBox:                       BoundingBox;
    scale:                             IncubatingEgg;
    uses:                              string;
    preservedParentSheetIndex:         string;
    destroyOvernight:                  string;
    furniture_type?:                   string;
    rotations?:                        string;
    currentRotation?:                  string;
    sourceRect?:                       BoundingBox;
    defaultSourceRect?:                BoundingBox;
    defaultBoundingBox?:               BoundingBox;
    drawHeldObjectLow?:                string;
    preserve?:                         string;
    color?:                            Color;
    colorSameIndexAsParentSheetIndex?: string;
    ColorSameIndexAsParentSheetIndex?: string;
    heldObject?:                       DishOfTheDay;
    bedType?:                          string;
}

export interface BoundingBox {
    X:        string;
    Y:        string;
    Width:    string;
    Height:   string;
    Location: IncubatingEgg;
    Size:     IncubatingEgg;
}

export interface Color {
    B:           string;
    G:           string;
    R:           string;
    A:           string;
    PackedValue: string;
}

export enum DishOfTheDayType {
    Basic = "Basic",
    Cooking = "Cooking",
    Crafting = "Crafting",
    Fish = "Fish",
    Minerals = "Minerals",
    Seeds = "Seeds",
}

export interface JunimoKartLeaderboards {
    entries:    Entries;
    maxEntries: MaxEntries;
}

export interface Entries {
    NetLeaderboardsEntry: NetLeaderboardsEntry[];
}

export interface NetLeaderboardsEntry {
    name:  Mailbox;
    score: MaxEntries;
}

export interface LimitedNutDrops {
    item: PreSelectedItemsItem[];
}

export interface LocationWeather {
    item: LocationWeatherItem[];
}

export interface LocationWeatherItem {
    key:   PurpleKey;
    value: PurpleValue;
}

export interface PurpleKey {
    LocationContext: string;
}

export interface PurpleValue {
    LocationWeather: LocationWeatherClass;
}

export interface LocationWeatherClass {
    weatherForTomorrow: MaxEntries;
    isRaining:          SleptInTemporaryBed;
    isSnowing:          SleptInTemporaryBed;
    isLightning:        SleptInTemporaryBed;
    isDebrisWeather:    SleptInTemporaryBed;
}

export interface Locations {
    GameLocation: GameLocation[];
}

export interface GameLocation {
    characters:                   CharactersClass | string;
    objects:                      ObjectsObjects | string;
    resourceClumps:               Umps | string;
    largeTerrainFeatures:         LargeTerrainFeaturesClass | string;
    terrainFeatures:              TerrainFeaturesClass | string;
    name:                         string;
    waterColor:                   Color;
    isFarm:                       string;
    isOutdoors:                   string;
    isStructure:                  string;
    ignoreDebrisWeather:          string;
    ignoreOutdoorLighting:        string;
    ignoreLights:                 string;
    treatAsOutdoors:              string;
    numberOfSpawnedObjectsOnMap:  string;
    miniJukeboxCount:             string;
    miniJukeboxTrack:             MiniJukeboxTrack;
    furniture:                    FluffyFurniture | string;
    IsGreenhouse:                 string;
    buildings?:                   Buildings;
    frameHouseColor?:             string;
    housePaintColor?:             HousePaintColor;
    animals?:                     string;
    piecesOfHay?:                 string;
    grandpaScore?:                string;
    farmCaveReady?:               string;
    hasSeenGrandpaNote?:          string;
    houseSource?:                 BoundingBox;
    greenhouseUnlocked?:          string;
    greenhouseMoved?:             string;
    petBowlWatered?:              SleptInTemporaryBed;
    spousePatioSpot?:             IncubatingEgg;
    Animals?:                     GameLocationAnimals;
    wallPaper?:                   string;
    appliedWallpaper?:            Applied;
    floor?:                       string;
    appliedFloor?:                Applied;
    farmerNumberOfOwner?:         string;
    fireplaceOn?:                 string;
    fridge?:                      Fridge;
    fridgePosition?:              IncubatingEgg;
    cribStyle?:                   string;
    daysUntilCommunityUpgrade?:   string;
    itemsFromPlayerToSell?:       string;
    itemsToStartSellingTomorrow?: string;
    bridgeFixed?:                 string;
    drivingOff?:                  string;
    drivingBack?:                 string;
    leaving?:                     string;
    hasSpawnedBugsToday?:         string;
    museumPieces?:                MuseumPieces;
    stumps?:                      Umps;
    hasUnlockedStatue?:           string;
    witchStatueGone?:             string;
    areasComplete?:               AreasComplete;
    numberOfStarsOnPlaque?:       string;
    bundles?:                     Bundles;
    bundleRewards?:               ChestConsumedLevels;
    ownerUID?:                    OwnerUIDClass;
    submerged?:                   string;
    ascending?:                   string;
    dayFirstEntered?:             string;
    nextRepathTime?:              string;
    repathTimeInterval?:          string;
    gateRect?:                    BoundingBox;
    _plankPosition?:              string;
    _plankDirection?:             string;
    animationState?:              string;
    shouldToggleResort?:          string;
    resortOpenToday?:             string;
    resortRestored?:              string;
    westernTurtleMoved?:          string;
    mermaidPuzzleFinished?:       string;
    fishedWalnut?:                string;
    drinksClaimed?:               string;
    bananaShrineComplete?:        SleptInTemporaryBed;
    bananaShrineNutAwarded?:      SleptInTemporaryBed;
    sandDuggy?:                   SandDuggy;
    farmhouseRestored?:           string;
    farmhouseMailbox?:            string;
    farmObelisk?:                 string;
    shippingBinPosition?:         IncubatingEgg;
    traderActivated?:             string;
    boulderRemoved?:              string;
    caveOpened?:                  string;
    treeNutShot?:                 string;
    treeNutObtained?:             SleptInTemporaryBed;
    firstParrotDone?:             string;
    completed?:                   string;
    piecesDonated?:               string[];
    centerSkeletonRestored?:      string;
    snakeRestored?:               string;
    batRestored?:                 string;
    frogRestored?:                string;
    plantsRestoredLeft?:          string;
    plantsRestoredRight?:         string;
    hasFailedSurveyToday?:        SleptInTemporaryBed;
    visited?:                     SleptInTemporaryBed | string;
    puzzleFinished?:              string;
    gourmandRequestsFulfilled?:   string;
}

export interface GameLocationAnimals {
    SerializableDictionaryOfInt64FarmAnimal: string;
}

export interface Applied {
    SerializableDictionaryOfStringString: BundleData;
}

export interface AreasComplete {
    boolean: string[];
}

export interface Buildings {
    Building: Building[];
}

export interface Building {
    tileX:                       string;
    tileY:                       string;
    tilesWide:                   string;
    tilesHigh:                   string;
    maxOccupants:                string;
    currentOccupants:            string;
    daysOfConstructionLeft:      string;
    daysUntilUpgrade:            string;
    buildingType:                string;
    buildingPaintColor:          BuildingPaintColor;
    humanDoor:                   IncubatingEgg;
    animalDoor:                  IncubatingEgg;
    color:                       Color;
    animalDoorOpen:              string;
    magical:                     string;
    fadeWhenPlayerIsBehind:      string;
    owner:                       string;
    isMoving:                    string;
    indoors?:                    Indoors;
    fishType?:                   MaxEntries;
    lastUnlockedPopulationGate?: MaxEntries;
    hasCompletedRequest?:        SleptInTemporaryBed;
    sign?:                       Sign;
    overrideWaterColor?:         OverrideWaterColor;
    output?:                     Output;
    neededItem?:                 NeededItem;
    neededItemCount?:            MaxEntries;
    daysSinceSpawn?:             MaxEntries;
    nettingStyle?:               MaxEntries;
    seedOffset?:                 MaxEntries;
    hasSpawnedFish?:             SleptInTemporaryBed;
    input?:                      Input;
}

export interface BuildingPaintColor {
    ColorName:        Mailbox;
    Color1Default:    SleptInTemporaryBed;
    Color1Hue:        MaxEntries;
    Color1Saturation: MaxEntries;
    Color1Lightness:  MaxEntries;
    Color2Default:    SleptInTemporaryBed;
    Color2Hue:        MaxEntries;
    Color2Saturation: MaxEntries;
    Color2Lightness:  MaxEntries;
    Color3Default:    SleptInTemporaryBed;
    Color3Hue:        MaxEntries;
    Color3Saturation: MaxEntries;
    Color3Lightness:  MaxEntries;
}

export interface Indoors {
    characters:                  string;
    objects:                     IndoorsObjects;
    resourceClumps:              string;
    largeTerrainFeatures:        string;
    terrainFeatures:             string;
    uniqueName:                  string;
    name:                        string;
    waterColor:                  Color;
    isFarm:                      string;
    isOutdoors:                  string;
    isStructure:                 string;
    ignoreDebrisWeather:         string;
    ignoreOutdoorLighting:       string;
    ignoreLights:                string;
    treatAsOutdoors:             string;
    numberOfSpawnedObjectsOnMap: string;
    miniJukeboxCount:            string;
    miniJukeboxTrack:            string;
    furniture:                   PurpleFurniture | string;
    IsGreenhouse:                string;
    animals:                     Animals;
    animalLimit:                 string;
    animalsThatLiveHere:         AnimalsThatLiveHere;
    incubatingEgg:               IncubatingEgg;
    Animals:                     IndoorsAnimals;
}

export interface IndoorsAnimals {
    SerializableDictionaryOfInt64FarmAnimal: Animals;
}

export interface Animals {
    item: AnimalsItem[];
}

export interface AnimalsItem {
    key:   OwnerUIDClass;
    value: FluffyValue;
}

export interface FluffyValue {
    FarmAnimal: FarmAnimal;
}

export interface FarmAnimal {
    name:                                    string;
    forceOneTileWide:                        string;
    isEmoting:                               string;
    isCharging:                              string;
    isGlowing:                               string;
    coloredBorder:                           string;
    flip:                                    string;
    drawOnTop:                               string;
    faceTowardFarmer:                        string;
    ignoreMovementAnimation:                 string;
    faceAwayFromFarmer:                      string;
    scale:                                   Scale;
    timeBeforeAIMovementAgain:               string;
    glowingTransparency:                     string;
    glowRate:                                string;
    willDestroyObjectsUnderfoot:             string;
    Position:                                IncubatingEgg;
    Speed:                                   string;
    FacingDirection:                         string;
    IsEmoting:                               string;
    CurrentEmote:                            string;
    Scale:                                   string;
    isSwimming:                              SleptInTemporaryBed;
    defaultProduceIndex:                     string;
    deluxeProduceIndex:                      string;
    currentProduce:                          string;
    friendshipTowardFarmer:                  string;
    daysSinceLastFed:                        string;
    pushAccumulator:                         string;
    uniqueFrameAccumulator:                  string;
    age:                                     string;
    daysOwned:                               string;
    meatIndex:                               string;
    health:                                  string;
    price:                                   string;
    produceQuality:                          string;
    daysToLay:                               string;
    daysSinceLastLay:                        string;
    ageWhenMature:                           string;
    harvestType:                             string;
    happiness:                               string;
    fullness:                                string;
    happinessDrain:                          string;
    fullnessDrain:                           string;
    wasAutoPet:                              string;
    wasPet:                                  string;
    showDifferentTextureWhenReadyForHarvest: string;
    allowReproduction:                       string;
    sound:                                   string;
    type:                                    string;
    buildingTypeILiveIn:                     BuildingTypeILiveIn;
    toolUsedForHarvest:                      ToolUsedForHarvest;
    frontBackBoundingBox:                    BoundingBox;
    sidewaysBoundingBox:                     BoundingBox;
    frontBackSourceRect:                     BoundingBox;
    sidewaysSourceRect:                      BoundingBox;
    myID:                                    string;
    ownerID:                                 string;
    parentId:                                string;
    homeLocation:                            IncubatingEgg;
    moodMessage:                             string;
    isEating:                                string;
    displayName:                             string;
}

export enum BuildingTypeILiveIn {
    Barn = "Barn",
    Coop = "Coop",
}

export enum ToolUsedForHarvest {
    MilkPail = "Milk Pail",
    Null = "null",
    Shears = "Shears",
}

export interface AnimalsThatLiveHere {
    long: string[];
}

export interface PurpleFurniture {
    Furniture: DishOfTheDay[];
}

export interface IndoorsObjects {
    item: ObjectsItemClass[];
}

export interface ObjectsItemClass {
    key:   FluffyKey;
    value: TentacledValue;
}

export interface FluffyKey {
    Vector2: IncubatingEgg;
}

export interface TentacledValue {
    Object: PurpleObject;
}

export interface PurpleObject {
    isLostItem:                string;
    category:                  string;
    hasBeenInInventory:        string;
    name:                      string;
    parentSheetIndex:          string;
    specialItem:               string;
    SpecialVariable:           string;
    DisplayName:               string;
    Name:                      string;
    Stack:                     string;
    tileLocation:              IncubatingEgg;
    owner:                     string;
    type:                      DishOfTheDayType;
    canBeSetDown:              string;
    canBeGrabbed:              string;
    isHoedirt:                 string;
    isSpawnedObject:           string;
    questItem:                 string;
    questId:                   string;
    isOn:                      string;
    fragility:                 string;
    price:                     string;
    edibility:                 string;
    stack:                     string;
    quality:                   string;
    bigCraftable:              string;
    setOutdoors:               string;
    setIndoors:                string;
    readyForHarvest:           string;
    showNextIndex:             string;
    flipped:                   string;
    hasBeenPickedUpByFarmer:   string;
    isRecipe:                  string;
    isLamp:                    string;
    minutesUntilReady:         string;
    boundingBox:               BoundingBox;
    scale:                     IncubatingEgg;
    uses:                      string;
    preservedParentSheetIndex: string;
    destroyOvernight:          string;
    currentLidFrame?:          string;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             string;
    coins?:                    string;
    items?:                    ObjectItemsClass;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     Color;
    playerChoiceColor?:        Color;
    playerChest?:              string;
    fridge?:                   string;
    giftbox?:                  string;
    giftboxIndex?:             string;
    spriteIndexOverride?:      string;
    dropContents?:             string;
    synchronized?:             string;
    specialChestType?:         SpecialChestType;
    heldObject?:               DishOfTheDay;
}

export interface ObjectItemsClass {
    Item: DisplayItemElement[] | DishOfTheDay;
}

export interface DisplayItemElement {
    isLostItem:                 string;
    category:                   string;
    hasBeenInInventory:         string;
    name:                       string;
    parentSheetIndex?:          string;
    specialItem:                string;
    SpecialVariable:            string;
    DisplayName:                string;
    Name:                       string;
    Stack:                      string;
    tileLocation?:              IncubatingEgg;
    owner?:                     string;
    type?:                      string;
    canBeSetDown?:              string;
    canBeGrabbed?:              string;
    isHoedirt?:                 string;
    isSpawnedObject?:           string;
    questItem?:                 string;
    questId?:                   string;
    isOn?:                      string;
    fragility?:                 string;
    price?:                     string;
    edibility?:                 string;
    stack?:                     string;
    quality?:                   string;
    bigCraftable?:              string;
    setOutdoors?:               string;
    setIndoors?:                string;
    readyForHarvest?:           string;
    showNextIndex?:             string;
    flipped?:                   string;
    hasBeenPickedUpByFarmer?:   string;
    isRecipe?:                  string;
    isLamp?:                    string;
    minutesUntilReady?:         string;
    boundingBox?:               BoundingBox;
    scale?:                     IncubatingEgg;
    uses?:                      string;
    preservedParentSheetIndex?: string;
    destroyOvernight?:          string;
    initialParentTileIndex?:    string;
    currentParentTileIndex?:    string;
    indexOfMenuItemView?:       string;
    stackable?:                 string;
    instantUse?:                string;
    isEfficient?:               string;
    animationSpeedModifier?:    string;
    upgradeLevel?:              string;
    numAttachmentSlots?:        string;
    attachments?:               string;
    BaseName?:                  string;
    InitialParentTileIndex?:    string;
    IndexOfMenuItemView?:       string;
    InstantUse?:                string;
    IsEfficient?:               string;
    AnimationSpeedModifier?:    string;
    Stackable?:                 string;
    furniture_type?:            string;
    rotations?:                 string;
    currentRotation?:           string;
    sourceRect?:                BoundingBox;
    defaultSourceRect?:         BoundingBox;
    defaultBoundingBox?:        BoundingBox;
    drawHeldObjectLow?:         string;
    additionalPower?:           MaxEntries;
    minDamage?:                 string;
    maxDamage?:                 string;
    speed?:                     string;
    addedPrecision?:            string;
    addedDefense?:              string;
    addedAreaOfEffect?:         string;
    knockback?:                 string;
    critChance?:                string;
    critMultiplier?:            string;
    appearance?:                string;
    isOnSpecial?:               string;
}

export interface SeparateWalletItems {
    SerializableDictionaryOfInt64NetObjectListOfItem: string;
}

export enum SpecialChestType {
    MiniShippingBin = "MiniShippingBin",
    None = "None",
}

export interface Input {
    isLostItem:                string;
    category:                  string;
    hasBeenInInventory:        string;
    name:                      string;
    parentSheetIndex:          string;
    specialItem:               string;
    SpecialVariable:           string;
    DisplayName:               string;
    Name:                      string;
    Stack:                     string;
    tileLocation:              IncubatingEgg;
    owner:                     string;
    type:                      DishOfTheDayType;
    canBeSetDown:              string;
    canBeGrabbed:              string;
    isHoedirt:                 string;
    isSpawnedObject:           string;
    questItem:                 string;
    questId:                   string;
    isOn:                      string;
    fragility:                 string;
    price:                     string;
    edibility:                 string;
    stack:                     string;
    quality:                   string;
    bigCraftable:              string;
    setOutdoors:               string;
    setIndoors:                string;
    readyForHarvest:           string;
    showNextIndex:             string;
    flipped:                   string;
    hasBeenPickedUpByFarmer:   string;
    isRecipe:                  string;
    isLamp:                    string;
    minutesUntilReady:         string;
    boundingBox:               BoundingBox;
    scale:                     IncubatingEgg;
    uses:                      string;
    preservedParentSheetIndex: string;
    destroyOvernight:          string;
    currentLidFrame:           string;
    lidFrameCount:             MaxEntries;
    frameCounter:              string;
    coins:                     string;
    items:                     InputItems;
    separateWalletItems:       SeparateWalletItems;
    chestType:                 string;
    tint:                      Color;
    playerChoiceColor:         Color;
    playerChest:               string;
    fridge:                    string;
    giftbox:                   string;
    giftboxIndex:              string;
    spriteIndexOverride:       string;
    dropContents:              string;
    synchronized:              string;
    specialChestType:          SpecialChestType;
}

export interface InputItems {
    Item: string;
}

export interface NeededItem {
    Object: DishOfTheDay | string;
}

export interface Output {
    Item?:                      DishOfTheDay;
    isLostItem?:                string;
    category?:                  string;
    hasBeenInInventory?:        string;
    name?:                      string;
    parentSheetIndex?:          string;
    specialItem?:               string;
    SpecialVariable?:           string;
    DisplayName?:               string;
    Name?:                      string;
    Stack?:                     string;
    tileLocation?:              IncubatingEgg;
    owner?:                     string;
    type?:                      DishOfTheDayType;
    canBeSetDown?:              string;
    canBeGrabbed?:              string;
    isHoedirt?:                 string;
    isSpawnedObject?:           string;
    questItem?:                 string;
    questId?:                   string;
    isOn?:                      string;
    fragility?:                 string;
    price?:                     string;
    edibility?:                 string;
    stack?:                     string;
    quality?:                   string;
    bigCraftable?:              string;
    setOutdoors?:               string;
    setIndoors?:                string;
    readyForHarvest?:           string;
    showNextIndex?:             string;
    flipped?:                   string;
    hasBeenPickedUpByFarmer?:   string;
    isRecipe?:                  string;
    isLamp?:                    string;
    minutesUntilReady?:         string;
    boundingBox?:               BoundingBox;
    scale?:                     IncubatingEgg;
    uses?:                      string;
    preservedParentSheetIndex?: string;
    destroyOvernight?:          string;
    currentLidFrame?:           string;
    lidFrameCount?:             MaxEntries;
    frameCounter?:              string;
    coins?:                     string;
    items?:                     string;
    separateWalletItems?:       SeparateWalletItems;
    chestType?:                 string;
    tint?:                      Color;
    playerChoiceColor?:         Color;
    playerChest?:               string;
    fridge?:                    string;
    giftbox?:                   string;
    giftboxIndex?:              string;
    spriteIndexOverride?:       string;
    dropContents?:              string;
    synchronized?:              string;
    specialChestType?:          SpecialChestType;
}

export interface OverrideWaterColor {
    Color: Color;
}

export interface Sign {
    Object: DishOfTheDay;
}

export interface ChestConsumedLevels {
    item: ChestConsumedLevelsItem[];
}

export interface ChestConsumedLevelsItem {
    key:   MaxEntries;
    value: SleptInTemporaryBed;
}

export interface Bundles {
    item: BundlesItem[];
}

export interface BundlesItem {
    key:   MaxEntries;
    value: StickyValue;
}

export interface StickyValue {
    ArrayOfBoolean: AreasComplete;
}

export interface CharactersClass {
    NPC: NPCElement[] | NPCElement;
}

export interface NPCElement {
    name:                           string;
    forceOneTileWide:               string;
    isEmoting:                      string;
    isCharging:                     string;
    isGlowing:                      string;
    coloredBorder:                  string;
    flip:                           string;
    drawOnTop:                      string;
    faceTowardFarmer:               string;
    ignoreMovementAnimation:        string;
    faceAwayFromFarmer:             string;
    scale:                          Scale;
    timeBeforeAIMovementAgain:      string;
    glowingTransparency:            string;
    glowRate:                       string;
    willDestroyObjectsUnderfoot:    string;
    Position:                       IncubatingEgg;
    Speed:                          string;
    FacingDirection:                string;
    IsEmoting:                      string;
    CurrentEmote:                   string;
    Scale:                          string;
    lastCrossroad:                  BoundingBox;
    daysAfterLastBirth:             string;
    birthday_Season?:               CurrentSeason;
    birthday_Day:                   string;
    age:                            string;
    manners:                        string;
    socialAnxiety:                  string;
    optimism:                       string;
    gender:                         string;
    sleptInBed:                     string;
    isInvisible:                    string;
    lastSeenMovieWeek:              string;
    datingFarmer:                   string;
    divorcedFromFarmer:             string;
    datable:                        string;
    defaultMap?:                    string;
    loveInterest?:                  string;
    id:                             string;
    homeRegion:                     string;
    daysUntilNotInvisible:          string;
    followSchedule:                 string;
    moveTowardPlayerThreshold:      string;
    hasBeenKissedToday:             SleptInTemporaryBed;
    shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
    shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
    shouldWearIslandAttire:         SleptInTemporaryBed;
    isMovingOnPathFindPath:         SleptInTemporaryBed;
    queuedSchedulePaths:            string;
    lastAttemptedSchedule:          string;
    dayScheduleName?:               string;
    endOfRouteBehaviorName:         Mailbox;
    squareMovementFacingPreference: string;
    DefaultFacingDirection:         string;
    DefaultMap?:                    string;
    DefaultPosition:                IncubatingEgg;
    IsWalkingInSquare:              string;
    IsWalkingTowardPlayer:          string;
    whichBreed?:                    string;
    lastPetDay?:                    LastPetDay;
    grantedFriendshipForPet?:       string;
    friendshipTowardFarmer?:        string;
    isSleepingOnFarmerBed?:         SleptInTemporaryBed;
    CurrentBehavior?:               string;
}

export interface LastPetDay {
    item: LastPetDayItem;
}

export interface LastPetDayItem {
    key:   OwnerUIDClass;
    value: MaxEntries;
}

export interface Fridge {
    isLostItem:                string;
    category:                  string;
    hasBeenInInventory:        string;
    name:                      string;
    parentSheetIndex:          string;
    specialItem:               string;
    SpecialVariable:           string;
    DisplayName:               string;
    Name:                      string;
    Stack:                     string;
    tileLocation:              IncubatingEgg;
    owner:                     string;
    type:                      DishOfTheDayType;
    canBeSetDown:              string;
    canBeGrabbed:              string;
    isHoedirt:                 string;
    isSpawnedObject:           string;
    questItem:                 string;
    questId:                   string;
    isOn:                      string;
    fragility:                 string;
    price:                     string;
    edibility:                 string;
    stack:                     string;
    quality:                   string;
    bigCraftable:              string;
    setOutdoors:               string;
    setIndoors:                string;
    readyForHarvest:           string;
    showNextIndex:             string;
    flipped:                   string;
    hasBeenPickedUpByFarmer:   string;
    isRecipe:                  string;
    isLamp:                    string;
    minutesUntilReady:         string;
    boundingBox:               BoundingBox;
    scale:                     IncubatingEgg;
    uses:                      string;
    preservedParentSheetIndex: string;
    destroyOvernight:          string;
    currentLidFrame:           string;
    lidFrameCount:             MaxEntries;
    frameCounter:              string;
    coins:                     string;
    items:                     ItemsLostLastDeathClass | string;
    separateWalletItems:       SeparateWalletItems;
    chestType:                 string;
    tint:                      Color;
    playerChoiceColor:         Color;
    playerChest:               string;
    fridge:                    string;
    giftbox:                   string;
    giftboxIndex:              string;
    spriteIndexOverride:       string;
    dropContents:              string;
    synchronized:              string;
    specialChestType:          SpecialChestType;
}

export interface ItemsLostLastDeathClass {
    Item: DishOfTheDay[];
}

export interface FluffyFurniture {
    Furniture: DishOfTheDay[] | DishOfTheDay;
}

export interface HousePaintColor {
    BuildingPaintColor: BuildingPaintColor;
}

export interface LargeTerrainFeaturesClass {
    LargeTerrainFeature: LargeTerrainFeatureElement[] | LargeTerrainFeatureElement;
}

export interface LargeTerrainFeatureElement {
    tilePosition:    IncubatingEgg;
    size:            string;
    datePlanted:     string;
    tileSheetOffset: string;
    overrideSeason:  string;
    health:          string;
    flipped:         string;
    townBush:        string;
    greenhouseBush:  string;
    drawShadow:      string;
}

export enum MiniJukeboxTrack {
    Empty = "",
    Playful = "playful",
}

export interface MuseumPieces {
    item: MuseumPiecesItem[];
}

export interface MuseumPiecesItem {
    key:   FluffyKey;
    value: MaxEntries;
}

export interface ObjectsObjects {
    item: PurpleItem[] | FluffyItem;
}

export interface PurpleItem {
    key:   FluffyKey;
    value: IndigoValue;
}

export interface IndigoValue {
    Object: FluffyObject;
}

export interface FluffyObject {
    isLostItem:                string;
    category:                  string;
    hasBeenInInventory:        string;
    name:                      string;
    parentSheetIndex:          string;
    specialItem:               string;
    SpecialVariable:           string;
    DisplayName:               string;
    Name:                      string;
    Stack:                     string;
    tileLocation:              IncubatingEgg;
    owner:                     string;
    type?:                     PurpleType;
    canBeSetDown:              string;
    canBeGrabbed:              string;
    isHoedirt:                 string;
    isSpawnedObject:           string;
    questItem:                 string;
    questId:                   string;
    isOn:                      string;
    fragility:                 string;
    price:                     string;
    edibility:                 string;
    stack:                     string;
    quality:                   string;
    bigCraftable:              string;
    setOutdoors:               string;
    setIndoors:                string;
    readyForHarvest:           string;
    showNextIndex:             string;
    flipped:                   string;
    hasBeenPickedUpByFarmer:   string;
    isRecipe:                  string;
    isLamp:                    string;
    minutesUntilReady:         string;
    boundingBox:               BoundingBox;
    scale:                     IncubatingEgg;
    uses:                      string;
    preservedParentSheetIndex: string;
    destroyOvernight:          string;
    heldObject?:               DishOfTheDay;
    health?:                   string;
    maxHealth?:                string;
    whichType?:                string;
    gatePosition?:             string;
    gateMotion?:               string;
    isGate?:                   string;
    currentLidFrame?:          string;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             string;
    coins?:                    string;
    items?:                    PurpleItems | string;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     Color;
    playerChoiceColor?:        Color;
    playerChest?:              string;
    fridge?:                   string;
    giftbox?:                  string;
    giftboxIndex?:             string;
    spriteIndexOverride?:      string;
    dropContents?:             string;
    synchronized?:             string;
    specialChestType?:         SpecialChestType;
    displayItem?:              DisplayItemElement;
    displayType?:              string;
    hoeDirt?:                  HoeDirt;
    directionOffset?:          IncubatingEgg;
    bait?:                     DishOfTheDay;
    tileIndexToShow?:          string;
    agingRate?:                string;
    daysToMature?:             string;
    pedestalType?:             string;
    requiredItem?:             DishOfTheDay;
    successColor?:             Color;
    lockOnSuccess?:            string;
    locked?:                   string;
    match?:                    string;
}

export interface HoeDirt {
    state:            string;
    fertilizer:       string;
    isGreenhouseDirt: string;
    crop:             HoeDirtCrop;
}

export interface HoeDirtCrop {
    phaseDays:                         CropsOfTheWeek;
    rowInSpriteSheet:                  string;
    phaseToShow:                       string;
    currentPhase:                      string;
    harvestMethod:                     string;
    indexOfHarvest:                    string;
    regrowAfterHarvest:                string;
    dayOfCurrentPhase:                 string;
    minHarvest:                        string;
    maxHarvest:                        string;
    maxHarvestIncreasePerFarmingLevel: string;
    daysOfUnclutteredGrowth:           string;
    whichForageCrop:                   string;
    seasonsToGrowIn:                   BroadcastedMail;
    tintColor:                         Color;
    flip:                              string;
    fullGrown:                         string;
    raisedSeeds:                       string;
    programColored:                    string;
    dead:                              string;
    forageCrop:                        string;
    chanceForExtraCrops:               string;
    seedIndex:                         string;
}

export interface PurpleItems {
    Item: ItemsItemClass[];
}

export interface ItemsItemClass {
    isLostItem:                        string;
    category:                          string;
    hasBeenInInventory:                string;
    name:                              string;
    parentSheetIndex?:                 string;
    specialItem:                       string;
    SpecialVariable:                   string;
    DisplayName:                       string;
    Name:                              string;
    Stack:                             string;
    tileLocation?:                     IncubatingEgg;
    owner?:                            string;
    type?:                             string;
    canBeSetDown?:                     string;
    canBeGrabbed?:                     string;
    isHoedirt?:                        string;
    isSpawnedObject?:                  string;
    questItem?:                        string;
    questId?:                          string;
    isOn?:                             string;
    fragility?:                        string;
    price?:                            string;
    edibility?:                        string;
    stack?:                            string;
    quality?:                          string;
    bigCraftable?:                     string;
    setOutdoors?:                      string;
    setIndoors?:                       string;
    readyForHarvest?:                  string;
    showNextIndex?:                    string;
    flipped?:                          string;
    hasBeenPickedUpByFarmer?:          string;
    isRecipe?:                         string;
    isLamp?:                           string;
    minutesUntilReady?:                string;
    boundingBox?:                      BoundingBox;
    scale?:                            IncubatingEgg;
    uses?:                             string;
    preservedParentSheetIndex?:        string;
    destroyOvernight?:                 string;
    initialParentTileIndex?:           string;
    currentParentTileIndex?:           string;
    indexOfMenuItemView?:              string;
    stackable?:                        string;
    instantUse?:                       string;
    isEfficient?:                      string;
    animationSpeedModifier?:           string;
    upgradeLevel?:                     string;
    numAttachmentSlots?:               string;
    attachments?:                      PurpleAttachments | string;
    BaseName?:                         string;
    InitialParentTileIndex?:           string;
    IndexOfMenuItemView?:              string;
    InstantUse?:                       string;
    IsEfficient?:                      string;
    AnimationSpeedModifier?:           string;
    Stackable?:                        string;
    minDamage?:                        string;
    maxDamage?:                        string;
    speed?:                            string;
    addedPrecision?:                   string;
    addedDefense?:                     string;
    addedAreaOfEffect?:                string;
    knockback?:                        string;
    critChance?:                       string;
    critMultiplier?:                   string;
    appearance?:                       string;
    isOnSpecial?:                      string;
    preserve?:                         string;
    color?:                            Color;
    colorSameIndexAsParentSheetIndex?: string;
    ColorSameIndexAsParentSheetIndex?: string;
    indexInTileSheet?:                 string;
    indexInTileSheetFemale?:           string;
    clothesType?:                      string;
    dyeable?:                          string;
    clothesColor?:                     Color;
    otherData?:                        string;
    isPrismatic?:                      string;
    Price?:                            string;
    defenseBonus?:                     string;
    immunityBonus?:                    string;
    indexInColorSheet?:                string;
    appliedBootSheetIndex?:            string;
    which?:                            string;
    skipHairDraw?:                     string;
    ignoreHairstyleOffset?:            string;
    hairDrawType?:                     string;
    uniqueID?:                         string;
    furniture_type?:                   string;
    rotations?:                        string;
    currentRotation?:                  string;
    sourceRect?:                       BoundingBox;
    defaultSourceRect?:                BoundingBox;
    defaultBoundingBox?:               BoundingBox;
    drawHeldObjectLow?:                string;
}

export interface PurpleAttachments {
    Object: string[] | string;
}

export enum PurpleType {
    Asdf = "asdf",
    Basic = "Basic",
    Crafting = "Crafting",
    Interactive = "interactive",
}

export interface FluffyItem {
    key:   FluffyKey;
    value: IndecentValue;
}

export interface IndecentValue {
    Object: TentacledObject;
}

export interface TentacledObject {
    isLostItem:                string;
    category:                  string;
    hasBeenInInventory:        string;
    name:                      string;
    parentSheetIndex:          string;
    specialItem:               string;
    SpecialVariable:           string;
    DisplayName:               string;
    Name:                      string;
    Stack:                     string;
    tileLocation:              IncubatingEgg;
    owner:                     string;
    type:                      PurpleType;
    canBeSetDown:              string;
    canBeGrabbed:              string;
    isHoedirt:                 string;
    isSpawnedObject:           string;
    questItem:                 string;
    questId:                   string;
    isOn:                      string;
    fragility:                 string;
    price:                     string;
    edibility:                 string;
    stack:                     string;
    quality:                   string;
    bigCraftable:              string;
    setOutdoors:               string;
    setIndoors:                string;
    readyForHarvest:           string;
    showNextIndex:             string;
    flipped:                   string;
    hasBeenPickedUpByFarmer:   string;
    isRecipe:                  string;
    isLamp:                    string;
    minutesUntilReady:         string;
    boundingBox:               BoundingBox;
    scale:                     IncubatingEgg;
    uses:                      string;
    preservedParentSheetIndex: string;
    destroyOvernight:          string;
    currentLidFrame?:          string;
    lidFrameCount?:            MaxEntries;
    frameCounter?:             string;
    coins?:                    string;
    items?:                    ObjectItemsClass;
    separateWalletItems?:      SeparateWalletItems;
    chestType?:                string;
    tint?:                     Color;
    playerChoiceColor?:        Color;
    playerChest?:              string;
    fridge?:                   string;
    giftbox?:                  string;
    giftboxIndex?:             string;
    spriteIndexOverride?:      string;
    dropContents?:             string;
    synchronized?:             string;
    specialChestType?:         SpecialChestType;
}

export interface Umps {
    ResourceClump: ResourceClump[];
}

export interface ResourceClump {
    width:            string;
    height:           string;
    parentSheetIndex: string;
    health:           string;
    tile:             IncubatingEgg;
}

export interface SandDuggy {
    whacked: string;
}

export interface TerrainFeaturesClass {
    item: TerrainFeaturesItem[];
}

export interface TerrainFeaturesItem {
    key:   FluffyKey;
    value: HilariousValue;
}

export interface HilariousValue {
    TerrainFeature: TerrainFeature;
}

export interface TerrainFeature {
    texture?:                    string;
    growthStage?:                string;
    treeType?:                   string;
    health?:                     string;
    flipped?:                    string;
    stump?:                      string;
    tapped?:                     string;
    hasSeed?:                    string;
    fertilized?:                 string;
    shakeLeft?:                  string;
    treeTopSourceRect?:          BoundingBox;
    state?:                      string;
    fertilizer?:                 string;
    isGreenhouseDirt?:           string;
    whichFloor?:                 string;
    whichView?:                  string;
    isPathway?:                  string;
    isSteppingStone?:            string;
    drawContouredShadow?:        string;
    cornerDecoratedBorders?:     string;
    indexOfFruit?:               string;
    daysUntilMature?:            string;
    fruitsOnTree?:               string;
    struckByLightningCountdown?: string;
    greenHouseTree?:             string;
    greenHouseTileTree?:         string;
    fruitSeason?:                CurrentSeason;
    crop?:                       TerrainFeatureCrop;
}

export interface TerrainFeatureCrop {
    phaseDays:                         CropsOfTheWeek | string;
    rowInSpriteSheet:                  string;
    phaseToShow:                       string;
    currentPhase:                      string;
    harvestMethod:                     string;
    indexOfHarvest:                    string;
    regrowAfterHarvest:                string;
    dayOfCurrentPhase:                 string;
    minHarvest:                        string;
    maxHarvest:                        string;
    maxHarvestIncreasePerFarmingLevel: string;
    daysOfUnclutteredGrowth:           string;
    whichForageCrop:                   string;
    seasonsToGrowIn:                   SeasonsToGrowInClass | string;
    tintColor:                         Color;
    flip:                              string;
    fullGrown:                         string;
    raisedSeeds:                       string;
    programColored:                    string;
    dead:                              string;
    forageCrop:                        string;
    chanceForExtraCrops:               string;
    seedIndex:                         string;
}

export interface SeasonsToGrowInClass {
    string: CurrentSeason[] | CurrentSeason;
}

export interface MinePermanentMineChanges {
    item: MinePermanentMineChangesItem[];
}

export interface MinePermanentMineChangesItem {
    key:   MaxEntries;
    value: AmbitiousValue;
}

export interface AmbitiousValue {
    MineInfo: MineInfo;
}

export interface MineInfo {
    platformContainersLeft: string;
    chestsLeft:             string;
    coalCartsLeft:          string;
    elevator:               string;
}

export interface Options {
    autoRun:                         string;
    dialogueTyping:                  string;
    showPortraits:                   string;
    showMerchantPortraits:           string;
    showMenuBackground:              string;
    playFootstepSounds:              string;
    alwaysShowToolHitLocation:       string;
    hideToolHitLocationWhenInMotion: string;
    pauseWhenOutOfFocus:             string;
    pinToolbarToggle:                string;
    mouseControls:                   string;
    keyboardControls:                string;
    gamepadControls:                 string;
    rumble:                          string;
    ambientOnlyToggle:               string;
    zoomButtons:                     string;
    invertScrollDirection:           string;
    screenFlash:                     string;
    showPlacementTileForGamepad:     string;
    snappyMenus:                     string;
    showAdvancedCraftingInformation: string;
    showMPEndOfNightReadyStatus:     string;
    muteAnimalSounds:                string;
    vsyncEnabled:                    string;
    fullscreen:                      string;
    windowedBorderlessFullscreen:    string;
    ipConnectionsEnabled:            string;
    enableServer:                    string;
    enableFarmhandCreation:          string;
    stowingMode:                     string;
    gamepadMode:                     string;
    useLegacySlingshotFiring:        string;
    musicVolumeLevel:                string;
    soundVolumeLevel:                string;
    footstepVolumeLevel:             string;
    ambientVolumeLevel:              string;
    snowTransparency:                string;
    zoomLevel:                       string;
    localCoopBaseZoomLevel:          string;
    uiScale:                         string;
    localCoopDesiredUIScale:         string;
    preferredResolutionX:            string;
    preferredResolutionY:            string;
    lightingQuality:                 string;
    serverPrivacy:                   string;
    actionButton:                    Button;
    cancelButton:                    CancelButton;
    useToolButton:                   Button;
    moveUpButton:                    CancelButton;
    moveRightButton:                 CancelButton;
    moveDownButton:                  CancelButton;
    moveLeftButton:                  CancelButton;
    menuButton:                      Button;
    runButton:                       CancelButton;
    tmpKeyToReplace:                 CancelButton;
    chatButton:                      Button;
    mapButton:                       CancelButton;
    journalButton:                   CancelButton;
    inventorySlot1:                  CancelButton;
    inventorySlot2:                  CancelButton;
    inventorySlot3:                  CancelButton;
    inventorySlot4:                  CancelButton;
    inventorySlot5:                  CancelButton;
    inventorySlot6:                  CancelButton;
    inventorySlot7:                  CancelButton;
    inventorySlot8:                  CancelButton;
    inventorySlot9:                  CancelButton;
    inventorySlot10:                 CancelButton;
    inventorySlot11:                 CancelButton;
    inventorySlot12:                 CancelButton;
    toolbarSwap:                     CancelButton;
    emoteButton:                     CancelButton;
    hardwareCursor:                  string;
}

export interface Button {
    InputButton: InputButton[];
}

export interface InputButton {
    key:        string;
    mouseLeft:  string;
    mouseRight: string;
}

export interface CancelButton {
    InputButton: InputButton;
}

export interface Player {
    name:                                  string;
    forceOneTileWide:                      string;
    isEmoting:                             string;
    isCharging:                            string;
    isGlowing:                             string;
    coloredBorder:                         string;
    flip:                                  string;
    drawOnTop:                             string;
    faceTowardFarmer:                      string;
    ignoreMovementAnimation:               string;
    faceAwayFromFarmer:                    string;
    scale:                                 Scale;
    timeBeforeAIMovementAgain:             string;
    glowingTransparency:                   string;
    glowRate:                              string;
    willDestroyObjectsUnderfoot:           string;
    Position:                              IncubatingEgg;
    Speed:                                 string;
    FacingDirection:                       string;
    IsEmoting:                             string;
    CurrentEmote:                          string;
    Scale:                                 string;
    questLog:                              QuestLog;
    professions:                           CropsOfTheWeek;
    newLevels:                             string;
    experiencePoints:                      CropsOfTheWeek;
    items:                                 FluffyItems;
    dialogueQuestionsAnswered:             CropsOfTheWeek;
    furnitureOwned:                        string;
    cookingRecipes:                        LimitedNutDrops;
    craftingRecipes:                       LimitedNutDrops;
    activeDialogueEvents:                  string;
    eventsSeen:                            CropsOfTheWeek;
    secretNotesSeen:                       CropsOfTheWeek;
    songsHeard:                            BroadcastedMail;
    achievements:                          CropsOfTheWeek;
    specialItems:                          CropsOfTheWeek;
    specialBigCraftables:                  CropsOfTheWeek;
    mailReceived:                          BroadcastedMail;
    mailForTomorrow:                       string;
    mailbox:                               Mailbox;
    timeWentToBed:                         MaxEntries;
    sleptInTemporaryBed:                   SleptInTemporaryBed;
    stats:                                 Stats;
    blueprints:                            string;
    biteChime:                             string;
    itemsLostLastDeath:                    ItemsLostLastDeathClass;
    movementDirections:                    string;
    farmName:                              string;
    favoriteThing:                         string;
    slotCanHost:                           string;
    userID:                                string;
    catPerson:                             string;
    whichPetBreed:                         string;
    acceptedDailyQuest:                    string;
    mostRecentBed:                         IncubatingEgg;
    emoteFavorites:                        string[];
    performedEmotes:                       string;
    shirt:                                 string;
    hair:                                  string;
    skin:                                  string;
    shoes:                                 string;
    accessory:                             string;
    facialHair:                            string;
    pants:                                 string;
    hairstyleColor:                        Color;
    pantsColor:                            Color;
    newEyeColor:                           Color;
    hat:                                   Hat;
    boots:                                 Boots;
    leftRing:                              TRing;
    rightRing:                             TRing;
    shirtItem:                             Item;
    pantsItem:                             Item;
    divorceTonight:                        string;
    changeWalletTypeTonight:               string;
    woodPieces:                            string;
    stonePieces:                           string;
    copperPieces:                          string;
    ironPieces:                            string;
    coalPieces:                            string;
    goldPieces:                            string;
    iridiumPieces:                         string;
    quartzPieces:                          string;
    gameVersion:                           string;
    gameVersionLabel:                      string;
    caveChoice:                            string;
    feed:                                  string;
    farmingLevel:                          string;
    miningLevel:                           string;
    combatLevel:                           string;
    foragingLevel:                         string;
    fishingLevel:                          string;
    luckLevel:                             string;
    newSkillPointsToSpend:                 string;
    addedFarmingLevel:                     string;
    addedMiningLevel:                      string;
    addedCombatLevel:                      string;
    addedForagingLevel:                    string;
    addedFishingLevel:                     string;
    addedLuckLevel:                        string;
    maxStamina:                            string;
    maxItems:                              string;
    lastSeenMovieWeek:                     string;
    resilience:                            string;
    attack:                                string;
    immunity:                              string;
    attackIncreaseModifier:                string;
    knockbackModifier:                     string;
    weaponSpeedModifier:                   string;
    critChanceModifier:                    string;
    critPowerModifier:                     string;
    weaponPrecisionModifier:               string;
    clubCoins:                             string;
    trashCanLevel:                         string;
    daysLeftForToolUpgrade:                string;
    houseUpgradeLevel:                     string;
    daysUntilHouseUpgrade:                 string;
    coopUpgradeLevel:                      string;
    barnUpgradeLevel:                      string;
    hasGreenhouse:                         string;
    hasUnlockedSkullDoor:                  string;
    hasDarkTalisman:                       string;
    hasMagicInk:                           string;
    showChestColorPicker:                  string;
    hasMagnifyingGlass:                    string;
    hasWateringCanEnchantment:             string;
    magneticRadius:                        string;
    temporaryInvincibilityTimer:           string;
    currentTemporaryInvincibilityDuration: string;
    health:                                string;
    maxHealth:                             string;
    difficultyModifier:                    string;
    isMale:                                string;
    hasBusTicket:                          string;
    stardewHero:                           string;
    hasClubCard:                           string;
    hasSpecialCharm:                       string;
    basicShipped:                          BasicShipped;
    mineralsFound:                         BasicShipped;
    recipesCooked:                         BasicShipped;
    fishCaught:                            ArchaeologyFound;
    archaeologyFound:                      ArchaeologyFound;
    callsReceived:                         string;
    giftedItems:                           GiftedItems;
    tailoredItems:                         LimitedNutDrops;
    friendshipData:                        FriendshipData;
    dayOfMonthForSaveGame:                 string;
    seasonForSaveGame:                     string;
    yearForSaveGame:                       string;
    overallsColor:                         string;
    shirtColor:                            string;
    skinColor:                             string;
    hairColor:                             string;
    eyeColor:                              string;
    bobber:                                string;
    qiGems:                                string;
    JOTPKProgress:                         JOTPKProgress;
    hasUsedDailyRevive:                    string;
    chestConsumedLevels:                   ChestConsumedLevels;
    saveTime:                              string;
    isCustomized:                          string;
    homeLocation:                          string;
    lastSleepLocation:                     string;
    lastSleepPoint:                        IncubatingEgg;
    daysMarried:                           string;
    movementMultiplier:                    string;
    theaterBuildDate:                      string;
    deepestMineLevel:                      string;
    stamina:                               string;
    totalMoneyEarned:                      string;
    millisecondsPlayed:                    string;
    hasRustyKey:                           string;
    hasSkullKey:                           string;
    canUnderstandDwarves:                  string;
    HasTownKey:                            string;
    useSeparateWallets:                    string;
    timesReachedMineBottom:                string;
    UniqueMultiplayerID:                   string;
    money:                                 string;
}

export interface JOTPKProgress {
    bulletDamage:   MaxEntries;
    fireSpeedLevel: MaxEntries;
    ammoLevel:      MaxEntries;
    spreadPistol:   SleptInTemporaryBed;
    runSpeedLevel:  MaxEntries;
    lives:          MaxEntries;
    coins:          MaxEntries;
    score:          MaxEntries;
    died:           SleptInTemporaryBed;
    whichRound:     MaxEntries;
    whichWave:      MaxEntries;
    heldItem:       MaxEntries;
    world:          MaxEntries;
    waveTimer:      MaxEntries;
    monsterChances: MonsterChances;
}

export interface MonsterChances {
    Vector2: IncubatingEgg[];
}

export interface ArchaeologyFound {
    item: ArchaeologyFoundItem[];
}

export interface ArchaeologyFoundItem {
    key:   MaxEntries;
    value: CunningValue;
}

export interface CunningValue {
    ArrayOfInt: CropsOfTheWeek;
}

export interface BasicShipped {
    item: BasicShippedItem[];
}

export interface BasicShippedItem {
    key:   MaxEntries;
    value: MaxEntries;
}

export interface Boots {
    isLostItem:            string;
    category:              string;
    hasBeenInInventory:    string;
    name:                  string;
    specialItem:           string;
    SpecialVariable:       string;
    DisplayName:           string;
    Name:                  string;
    Stack:                 string;
    defenseBonus:          string;
    immunityBonus:         string;
    indexInTileSheet:      string;
    price:                 string;
    indexInColorSheet:     string;
    appliedBootSheetIndex: string;
}

export interface FriendshipData {
    item: FriendshipDataItem[];
}

export interface FriendshipDataItem {
    key:   Mailbox;
    value: MagentaValue;
}

export interface MagentaValue {
    Friendship: Friendship;
}

export interface Friendship {
    Points:           number;
    GiftsThisWeek:    string;
    GiftsToday:       string;
    LastGiftDate?:    LastGiftDate;
    TalkedToToday:    string;
    ProposalRejected: string;
    Status:           Status;
    Proposer:         string;
    RoommateMarriage: string;
}

export interface LastGiftDate {
    Year:       string;
    DayOfMonth: string;
    Season:     CurrentSeason;
    TotalDays:  string;
}

export enum Status {
    Friendly = "Friendly",
}

export interface GiftedItems {
    item: GiftedItemsItem[];
}

export interface GiftedItemsItem {
    key:   Mailbox;
    value: FriskyValue;
}

export interface FriskyValue {
    dictionary: BasicShipped;
}

export interface Hat {
    isLostItem:            string;
    category:              string;
    hasBeenInInventory:    string;
    name:                  string;
    specialItem:           string;
    SpecialVariable:       string;
    DisplayName:           string;
    Name:                  string;
    Stack:                 string;
    which:                 string;
    skipHairDraw:          string;
    ignoreHairstyleOffset: string;
    hairDrawType:          string;
    isPrismatic:           string;
}

export interface FluffyItems {
    Item: Array<TentacledItem>;
}

export interface TentacledItem {
    isLostItem:                 string;
    category:                   string;
    hasBeenInInventory:         string;
    name:                       string;
    specialItem:                string;
    SpecialVariable:            string;
    DisplayName:                string;
    Name:                       string;
    Stack:                      string;
    initialParentTileIndex?:    string;
    currentParentTileIndex?:    string;
    indexOfMenuItemView?:       string;
    stackable?:                 string;
    instantUse?:                string;
    isEfficient?:               string;
    animationSpeedModifier?:    string;
    upgradeLevel?:              string;
    numAttachmentSlots?:        string;
    attachments?:               FluffyAttachments | string;
    BaseName?:                  string;
    InitialParentTileIndex?:    string;
    IndexOfMenuItemView?:       string;
    InstantUse?:                string;
    IsEfficient?:               string;
    AnimationSpeedModifier?:    string;
    Stackable?:                 string;
    type?:                      string;
    minDamage?:                 string;
    maxDamage?:                 string;
    speed?:                     string;
    addedPrecision?:            string;
    addedDefense?:              string;
    addedAreaOfEffect?:         string;
    knockback?:                 string;
    critChance?:                string;
    critMultiplier?:            string;
    appearance?:                string;
    isOnSpecial?:               string;
    additionalPower?:           MaxEntries;
    parentSheetIndex?:          string;
    tileLocation?:              IncubatingEgg;
    owner?:                     string;
    canBeSetDown?:              string;
    canBeGrabbed?:              string;
    isHoedirt?:                 string;
    isSpawnedObject?:           string;
    questItem?:                 string;
    questId?:                   string;
    isOn?:                      string;
    fragility?:                 string;
    price?:                     string;
    edibility?:                 string;
    stack?:                     string;
    quality?:                   string;
    bigCraftable?:              string;
    setOutdoors?:               string;
    setIndoors?:                string;
    readyForHarvest?:           string;
    showNextIndex?:             string;
    flipped?:                   string;
    hasBeenPickedUpByFarmer?:   string;
    isRecipe?:                  string;
    isLamp?:                    string;
    minutesUntilReady?:         string;
    boundingBox?:               BoundingBox;
    scale?:                     IncubatingEgg;
    uses?:                      string;
    preservedParentSheetIndex?: string;
    destroyOvernight?:          string;
    isBottomless?:              string;
    waterCanMax?:               string;
    WaterLeft?:                 string;
    IsBottomless?:              string;
}

export interface FluffyAttachments {
    Object: Array<DishOfTheDay | string>;
}

export interface TRing {
    isLostItem:         string;
    category:           string;
    hasBeenInInventory: string;
    name:               string;
    parentSheetIndex:   string;
    specialItem:        string;
    SpecialVariable:    string;
    DisplayName:        string;
    Name:               string;
    Stack:              string;
    price:              string;
    indexInTileSheet:   string;
    uniqueID:           string;
}

export interface Item {
    isLostItem:             string;
    category:               string;
    hasBeenInInventory:     string;
    name:                   string;
    parentSheetIndex:       string;
    specialItem:            string;
    SpecialVariable:        string;
    DisplayName:            string;
    Name:                   string;
    Stack:                  string;
    price:                  string;
    indexInTileSheet:       string;
    indexInTileSheetFemale: string;
    clothesType:            string;
    dyeable:                string;
    clothesColor:           Color;
    otherData:              string;
    isPrismatic:            string;
    Price:                  string;
}

export interface QuestLog {
    Quest: Quest[];
}

export interface Quest {
    _currentObjective: string;
    _questDescription: string;
    _questTitle:       string;
    rewardDescription: string;
    accepted:          string;
    completed:         string;
    dailyQuest:        string;
    showNew:           string;
    canBeCancelled:    string;
    destroy:           string;
    id:                string;
    moneyReward:       string;
    questType:         string;
    daysLeft:          string;
    dayQuestAccepted:  string;
    nextQuests:        MaxEntries;
    questTitle:        string;
    targetMessage?:    string;
    target?:           string;
    item?:             string;
    number?:           string;
    parts?:            string;
    dialogueparts?:    string;
}

export interface Stats {
    seedsSown:              string;
    itemsShipped:           string;
    itemsCooked:            string;
    itemsCrafted:           string;
    chickenEggsLayed:       string;
    duckEggsLayed:          string;
    cowMilkProduced:        string;
    goatMilkProduced:       string;
    rabbitWoolProduced:     string;
    sheepWoolProduced:      string;
    cheeseMade:             string;
    goatCheeseMade:         string;
    trufflesFound:          string;
    stoneGathered:          string;
    rocksCrushed:           string;
    dirtHoed:               string;
    giftsGiven:             string;
    timesUnconscious:       string;
    averageBedtime:         string;
    timesFished:            string;
    fishCaught:             string;
    bouldersCracked:        string;
    stumpsChopped:          string;
    stepsTaken:             string;
    monstersKilled:         string;
    diamondsFound:          string;
    prismaticShardsFound:   string;
    otherPreciousGemsFound: string;
    caveCarrotsFound:       string;
    copperFound:            string;
    ironFound:              string;
    coalFound:              string;
    coinsFound:             string;
    goldFound:              string;
    iridiumFound:           string;
    barsSmelted:            string;
    beveragesMade:          string;
    preservesMade:          string;
    piecesOfTrashRecycled:  string;
    mysticStonesCrushed:    string;
    daysPlayed:             string;
    weedsEliminated:        string;
    sticksChopped:          string;
    notesFound:             string;
    questsCompleted:        string;
    starLevelCropsShipped:  string;
    cropsShipped:           string;
    itemsForaged:           string;
    slimesKilled:           string;
    geodesCracked:          string;
    goodFriends:            string;
    totalMoneyGifted:       string;
    individualMoneyEarned:  string;
    specificMonstersKilled: LimitedNutDrops;
    stat_dictionary:        StatDictionary;
    GoodFriends:            string;
    CropsShipped:           string;
    ItemsForaged:           string;
    GeodesCracked:          string;
    SlimesKilled:           string;
    StarLevelCropsShipped:  string;
    StoneGathered:          string;
    QuestsCompleted:        string;
    FishCaught:             string;
    NotesFound:             string;
    SticksChopped:          string;
    WeedsEliminated:        string;
    DaysPlayed:             string;
    BouldersCracked:        string;
    MysticStonesCrushed:    string;
    GoatCheeseMade:         string;
    CheeseMade:             string;
    PiecesOfTrashRecycled:  string;
    PreservesMade:          string;
    BeveragesMade:          string;
    BarsSmelted:            string;
    IridiumFound:           string;
    GoldFound:              string;
    CoinsFound:             string;
    CoalFound:              string;
    IronFound:              string;
    CopperFound:            string;
    CaveCarrotsFound:       string;
    OtherPreciousGemsFound: string;
    PrismaticShardsFound:   string;
    DiamondsFound:          string;
    MonstersKilled:         string;
    StepsTaken:             string;
    StumpsChopped:          string;
    TimesFished:            string;
    AverageBedtime:         string;
    TimesUnconscious:       string;
    GiftsGiven:             string;
    DirtHoed:               string;
    RocksCrushed:           string;
    TrufflesFound:          string;
    SheepWoolProduced:      string;
    RabbitWoolProduced:     string;
    GoatMilkProduced:       string;
    CowMilkProduced:        string;
    DuckEggsLayed:          string;
    ItemsCrafted:           string;
    ChickenEggsLayed:       string;
    ItemsCooked:            string;
    ItemsShipped:           string;
    SeedsSown:              string;
    IndividualMoneyEarned:  string;
}

export interface StatDictionary {
    item: StatDictionaryItem[];
}

export interface StatDictionaryItem {
    key:   Mailbox;
    value: MischievousValue;
}

export interface MischievousValue {
    unsignedInt: string;
}

export interface SpecialOrders {
    SpecialOrder: SpecialOrdersSpecialOrder;
}

export interface SpecialOrdersSpecialOrder {
    preSelectedItems:       PreSelectedItems;
    selectedRandomElements: PreSelectedItems;
    objectives:             SpecialOrderObjective[];
    generationSeed:         string;
    seenParticipantsIDs:    ParticipantsIDs;
    participantsIDs:        ParticipantsIDs;
    unclaimedRewardsIDs:    string;
    appliedSpecialRules:    string;
    rewards:                Reward[];
    questKey:               string;
    questName:              string;
    questDescription:       string;
    requester:              string;
    orderType:              string;
    specialRule:            string;
    readyForRemoval:        string;
    itemToRemoveOnEnd:      string;
    dueDate:                string;
    duration:               string;
    questState:             string;
}

export interface SpecialOrderObjective {
    currentCount:             string;
    maxCount:                 string;
    description:              string;
    failOnCompletion:         string;
    acceptableContextTagSets: string;
    useShipmentValue?:        string;
}

export interface ParticipantsIDs {
    item: ParticipantsIDsItem;
}

export interface ParticipantsIDsItem {
    key:   OwnerUIDClass;
    value: SleptInTemporaryBed;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toSaveGame(json: string): SaveGame {
        return cast(JSON.parse(json), r("SaveGame"));
    }

    public static saveGameToJson(value: SaveGame): string {
        return JSON.stringify(uncast(value, r("SaveGame")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "SaveGame": o([
        { json: "player", js: "player", typ: r("Player") },
        { json: "locations", js: "locations", typ: r("Locations") },
        { json: "currentSeason", js: "currentSeason", typ: r("CurrentSeason") },
        { json: "samBandName", js: "samBandName", typ: "" },
        { json: "elliottBookName", js: "elliottBookName", typ: "" },
        { json: "broadcastedMail", js: "broadcastedMail", typ: r("BroadcastedMail") },
        { json: "worldStateIDs", js: "worldStateIDs", typ: r("BroadcastedMail") },
        { json: "lostBooksFound", js: "lostBooksFound", typ: "" },
        { json: "goldenWalnuts", js: "goldenWalnuts", typ: "" },
        { json: "goldenWalnutsFound", js: "goldenWalnutsFound", typ: "" },
        { json: "miniShippingBinsObtained", js: "miniShippingBinsObtained", typ: "" },
        { json: "mineShrineActivated", js: "mineShrineActivated", typ: "" },
        { json: "goldenCoconutCracked", js: "goldenCoconutCracked", typ: "" },
        { json: "parrotPlatformsUnlocked", js: "parrotPlatformsUnlocked", typ: "" },
        { json: "farmPerfect", js: "farmPerfect", typ: "" },
        { json: "foundBuriedNuts", js: "foundBuriedNuts", typ: r("BroadcastedMail") },
        { json: "visitsUntilY1Guarantee", js: "visitsUntilY1Guarantee", typ: "" },
        { json: "shuffleMineChests", js: "shuffleMineChests", typ: "" },
        { json: "dayOfMonth", js: "dayOfMonth", typ: "" },
        { json: "year", js: "year", typ: "" },
        { json: "farmerWallpaper", js: "farmerWallpaper", typ: "" },
        { json: "FarmerFloor", js: "FarmerFloor", typ: "" },
        { json: "currentWallpaper", js: "currentWallpaper", typ: "" },
        { json: "currentFloor", js: "currentFloor", typ: "" },
        { json: "currentSongIndex", js: "currentSongIndex", typ: "" },
        { json: "countdownToWedding", js: "countdownToWedding", typ: "" },
        { json: "incubatingEgg", js: "incubatingEgg", typ: r("IncubatingEgg") },
        { json: "chanceToRainTomorrow", js: "chanceToRainTomorrow", typ: "" },
        { json: "dailyLuck", js: "dailyLuck", typ: "" },
        { json: "uniqueIDForThisGame", js: "uniqueIDForThisGame", typ: "" },
        { json: "weddingToday", js: "weddingToday", typ: "" },
        { json: "isRaining", js: "isRaining", typ: "" },
        { json: "isDebrisWeather", js: "isDebrisWeather", typ: "" },
        { json: "shippingTax", js: "shippingTax", typ: "" },
        { json: "isLightning", js: "isLightning", typ: "" },
        { json: "isSnowing", js: "isSnowing", typ: "" },
        { json: "shouldSpawnMonsters", js: "shouldSpawnMonsters", typ: "" },
        { json: "hasApplied1_3_UpdateChanges", js: "hasApplied1_3_UpdateChanges", typ: "" },
        { json: "hasApplied1_4_UpdateChanges", js: "hasApplied1_4_UpdateChanges", typ: "" },
        { json: "musicVolume", js: "musicVolume", typ: "" },
        { json: "soundVolume", js: "soundVolume", typ: "" },
        { json: "cropsOfTheWeek", js: "cropsOfTheWeek", typ: r("CropsOfTheWeek") },
        { json: "dishOfTheDay", js: "dishOfTheDay", typ: r("DishOfTheDay") },
        { json: "highestPlayerLimit", js: "highestPlayerLimit", typ: "" },
        { json: "moveBuildingPermissionMode", js: "moveBuildingPermissionMode", typ: "" },
        { json: "locationWeather", js: "locationWeather", typ: r("LocationWeather") },
        { json: "bannedUsers", js: "bannedUsers", typ: "" },
        { json: "bundleData", js: "bundleData", typ: r("BundleData") },
        { json: "limitedNutDrops", js: "limitedNutDrops", typ: r("LimitedNutDrops") },
        { json: "latestID", js: "latestID", typ: "" },
        { json: "options", js: "options", typ: r("Options") },
        { json: "splitscreenOptions", js: "splitscreenOptions", typ: "" },
        { json: "CustomData", js: "CustomData", typ: "" },
        { json: "mine_permanentMineChanges", js: "mine_permanentMineChanges", typ: r("MinePermanentMineChanges") },
        { json: "mine_lowestLevelReached", js: "mine_lowestLevelReached", typ: "" },
        { json: "minecartHighScore", js: "minecartHighScore", typ: "" },
        { json: "weatherForTomorrow", js: "weatherForTomorrow", typ: "" },
        { json: "whichFarm", js: "whichFarm", typ: "" },
        { json: "mine_lowestLevelReachedForOrder", js: "mine_lowestLevelReachedForOrder", typ: "" },
        { json: "skullCavesDifficulty", js: "skullCavesDifficulty", typ: "" },
        { json: "minesDifficulty", js: "minesDifficulty", typ: "" },
        { json: "currentGemBirdIndex", js: "currentGemBirdIndex", typ: "" },
        { json: "junimoKartLeaderboards", js: "junimoKartLeaderboards", typ: r("JunimoKartLeaderboards") },
        { json: "specialOrders", js: "specialOrders", typ: r("SpecialOrders") },
        { json: "availableSpecialOrders", js: "availableSpecialOrders", typ: r("AvailableSpecialOrders") },
        { json: "completedSpecialOrders", js: "completedSpecialOrders", typ: r("BroadcastedMail") },
        { json: "acceptedSpecialOrderTypes", js: "acceptedSpecialOrderTypes", typ: "" },
        { json: "returnedDonations", js: "returnedDonations", typ: "" },
        { json: "junimoChest", js: "junimoChest", typ: "" },
        { json: "collectedNutTracker", js: "collectedNutTracker", typ: r("BroadcastedMail") },
        { json: "farmerFriendships", js: "farmerFriendships", typ: "" },
        { json: "cellarAssignments", js: "cellarAssignments", typ: r("CellarAssignments") },
        { json: "lastAppliedSaveFix", js: "lastAppliedSaveFix", typ: "" },
        { json: "gameVersion", js: "gameVersion", typ: "" },
        { json: "gameVersionLabel", js: "gameVersionLabel", typ: "" },
    ], false),
    "AvailableSpecialOrders": o([
        { json: "SpecialOrder", js: "SpecialOrder", typ: a(r("SpecialOrderElement")) },
    ], false),
    "SpecialOrderElement": o([
        { json: "preSelectedItems", js: "preSelectedItems", typ: "" },
        { json: "selectedRandomElements", js: "selectedRandomElements", typ: u(r("PreSelectedItems"), "") },
        { json: "objectives", js: "objectives", typ: u(a(r("ObjectivesObjective")), r("ObjectivesClass")) },
        { json: "generationSeed", js: "generationSeed", typ: "" },
        { json: "seenParticipantsIDs", js: "seenParticipantsIDs", typ: "" },
        { json: "participantsIDs", js: "participantsIDs", typ: "" },
        { json: "unclaimedRewardsIDs", js: "unclaimedRewardsIDs", typ: "" },
        { json: "appliedSpecialRules", js: "appliedSpecialRules", typ: "" },
        { json: "rewards", js: "rewards", typ: u(a(r("Reward")), r("RewardsClass")) },
        { json: "questKey", js: "questKey", typ: "" },
        { json: "questName", js: "questName", typ: "" },
        { json: "questDescription", js: "questDescription", typ: "" },
        { json: "requester", js: "requester", typ: "" },
        { json: "orderType", js: "orderType", typ: "" },
        { json: "specialRule", js: "specialRule", typ: "" },
        { json: "readyForRemoval", js: "readyForRemoval", typ: "" },
        { json: "itemToRemoveOnEnd", js: "itemToRemoveOnEnd", typ: "" },
        { json: "dueDate", js: "dueDate", typ: "" },
        { json: "duration", js: "duration", typ: "" },
        { json: "questState", js: "questState", typ: "" },
    ], false),
    "ObjectivesObjective": o([
        { json: "currentCount", js: "currentCount", typ: "" },
        { json: "maxCount", js: "maxCount", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "failOnCompletion", js: "failOnCompletion", typ: "" },
        { json: "acceptableContextTagSets", js: "acceptableContextTagSets", typ: "" },
        { json: "dropBox", js: "dropBox", typ: u(undefined, "") },
        { json: "dropBoxGameLocation", js: "dropBoxGameLocation", typ: u(undefined, "") },
        { json: "dropBoxTileLocation", js: "dropBoxTileLocation", typ: u(undefined, r("IncubatingEgg")) },
        { json: "minimumCapacity", js: "minimumCapacity", typ: u(undefined, "") },
        { json: "confirmed", js: "confirmed", typ: u(undefined, "") },
    ], false),
    "IncubatingEgg": o([
        { json: "X", js: "X", typ: "" },
        { json: "Y", js: "Y", typ: "" },
    ], false),
    "ObjectivesClass": o([
        { json: "currentCount", js: "currentCount", typ: "" },
        { json: "maxCount", js: "maxCount", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "failOnCompletion", js: "failOnCompletion", typ: "" },
        { json: "targetNames", js: "targetNames", typ: u(undefined, "") },
    ], false),
    "Reward": o([
        { json: "amount", js: "amount", typ: u(undefined, r("MaxEntries")) },
        { json: "multiplier", js: "multiplier", typ: u(undefined, r("Scale")) },
        { json: "noLetter", js: "noLetter", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "grantedMails", js: "grantedMails", typ: u(undefined, r("Mailbox")) },
        { json: "host", js: "host", typ: u(undefined, r("SleptInTemporaryBed")) },
    ], false),
    "MaxEntries": o([
        { json: "int", js: "int", typ: "" },
    ], false),
    "Mailbox": o([
        { json: "string", js: "string", typ: "" },
    ], false),
    "SleptInTemporaryBed": o([
        { json: "boolean", js: "boolean", typ: "" },
    ], false),
    "Scale": o([
        { json: "float", js: "float", typ: "" },
    ], false),
    "RewardsClass": o([
        { json: "amount", js: "amount", typ: r("MaxEntries") },
    ], false),
    "PreSelectedItems": o([
        { json: "item", js: "item", typ: r("PreSelectedItemsItem") },
    ], false),
    "PreSelectedItemsItem": o([
        { json: "key", js: "key", typ: r("Mailbox") },
        { json: "value", js: "value", typ: r("MaxEntries") },
    ], false),
    "BroadcastedMail": o([
        { json: "string", js: "string", typ: a("") },
    ], false),
    "BundleData": o([
        { json: "item", js: "item", typ: a(r("BundleDataItem")) },
    ], false),
    "BundleDataItem": o([
        { json: "key", js: "key", typ: r("Mailbox") },
        { json: "value", js: "value", typ: r("Mailbox") },
    ], false),
    "CellarAssignments": o([
        { json: "item", js: "item", typ: r("CellarAssignmentsItem") },
    ], false),
    "CellarAssignmentsItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("OwnerUIDClass") },
    ], false),
    "OwnerUIDClass": o([
        { json: "long", js: "long", typ: "" },
    ], false),
    "CropsOfTheWeek": o([
        { json: "int", js: "int", typ: a("") },
    ], false),
    "DishOfTheDay": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("DishOfTheDayType")) },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "furniture_type", js: "furniture_type", typ: u(undefined, "") },
        { json: "rotations", js: "rotations", typ: u(undefined, "") },
        { json: "currentRotation", js: "currentRotation", typ: u(undefined, "") },
        { json: "sourceRect", js: "sourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultSourceRect", js: "defaultSourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultBoundingBox", js: "defaultBoundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "drawHeldObjectLow", js: "drawHeldObjectLow", typ: u(undefined, "") },
        { json: "preserve", js: "preserve", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, r("Color")) },
        { json: "colorSameIndexAsParentSheetIndex", js: "colorSameIndexAsParentSheetIndex", typ: u(undefined, "") },
        { json: "ColorSameIndexAsParentSheetIndex", js: "ColorSameIndexAsParentSheetIndex", typ: u(undefined, "") },
        { json: "heldObject", js: "heldObject", typ: u(undefined, r("DishOfTheDay")) },
        { json: "bedType", js: "bedType", typ: u(undefined, "") },
    ], false),
    "BoundingBox": o([
        { json: "X", js: "X", typ: "" },
        { json: "Y", js: "Y", typ: "" },
        { json: "Width", js: "Width", typ: "" },
        { json: "Height", js: "Height", typ: "" },
        { json: "Location", js: "Location", typ: r("IncubatingEgg") },
        { json: "Size", js: "Size", typ: r("IncubatingEgg") },
    ], false),
    "Color": o([
        { json: "B", js: "B", typ: "" },
        { json: "G", js: "G", typ: "" },
        { json: "R", js: "R", typ: "" },
        { json: "A", js: "A", typ: "" },
        { json: "PackedValue", js: "PackedValue", typ: "" },
    ], false),
    "JunimoKartLeaderboards": o([
        { json: "entries", js: "entries", typ: r("Entries") },
        { json: "maxEntries", js: "maxEntries", typ: r("MaxEntries") },
    ], false),
    "Entries": o([
        { json: "NetLeaderboardsEntry", js: "NetLeaderboardsEntry", typ: a(r("NetLeaderboardsEntry")) },
    ], false),
    "NetLeaderboardsEntry": o([
        { json: "name", js: "name", typ: r("Mailbox") },
        { json: "score", js: "score", typ: r("MaxEntries") },
    ], false),
    "LimitedNutDrops": o([
        { json: "item", js: "item", typ: a(r("PreSelectedItemsItem")) },
    ], false),
    "LocationWeather": o([
        { json: "item", js: "item", typ: a(r("LocationWeatherItem")) },
    ], false),
    "LocationWeatherItem": o([
        { json: "key", js: "key", typ: r("PurpleKey") },
        { json: "value", js: "value", typ: r("PurpleValue") },
    ], false),
    "PurpleKey": o([
        { json: "LocationContext", js: "LocationContext", typ: "" },
    ], false),
    "PurpleValue": o([
        { json: "LocationWeather", js: "LocationWeather", typ: r("LocationWeatherClass") },
    ], false),
    "LocationWeatherClass": o([
        { json: "weatherForTomorrow", js: "weatherForTomorrow", typ: r("MaxEntries") },
        { json: "isRaining", js: "isRaining", typ: r("SleptInTemporaryBed") },
        { json: "isSnowing", js: "isSnowing", typ: r("SleptInTemporaryBed") },
        { json: "isLightning", js: "isLightning", typ: r("SleptInTemporaryBed") },
        { json: "isDebrisWeather", js: "isDebrisWeather", typ: r("SleptInTemporaryBed") },
    ], false),
    "Locations": o([
        { json: "GameLocation", js: "GameLocation", typ: a(r("GameLocation")) },
    ], false),
    "GameLocation": o([
        { json: "characters", js: "characters", typ: u(r("CharactersClass"), "") },
        { json: "objects", js: "objects", typ: u(r("ObjectsObjects"), "") },
        { json: "resourceClumps", js: "resourceClumps", typ: u(r("Umps"), "") },
        { json: "largeTerrainFeatures", js: "largeTerrainFeatures", typ: u(r("LargeTerrainFeaturesClass"), "") },
        { json: "terrainFeatures", js: "terrainFeatures", typ: u(r("TerrainFeaturesClass"), "") },
        { json: "name", js: "name", typ: "" },
        { json: "waterColor", js: "waterColor", typ: r("Color") },
        { json: "isFarm", js: "isFarm", typ: "" },
        { json: "isOutdoors", js: "isOutdoors", typ: "" },
        { json: "isStructure", js: "isStructure", typ: "" },
        { json: "ignoreDebrisWeather", js: "ignoreDebrisWeather", typ: "" },
        { json: "ignoreOutdoorLighting", js: "ignoreOutdoorLighting", typ: "" },
        { json: "ignoreLights", js: "ignoreLights", typ: "" },
        { json: "treatAsOutdoors", js: "treatAsOutdoors", typ: "" },
        { json: "numberOfSpawnedObjectsOnMap", js: "numberOfSpawnedObjectsOnMap", typ: "" },
        { json: "miniJukeboxCount", js: "miniJukeboxCount", typ: "" },
        { json: "miniJukeboxTrack", js: "miniJukeboxTrack", typ: r("MiniJukeboxTrack") },
        { json: "furniture", js: "furniture", typ: u(r("FluffyFurniture"), "") },
        { json: "IsGreenhouse", js: "IsGreenhouse", typ: "" },
        { json: "buildings", js: "buildings", typ: u(undefined, r("Buildings")) },
        { json: "frameHouseColor", js: "frameHouseColor", typ: u(undefined, "") },
        { json: "housePaintColor", js: "housePaintColor", typ: u(undefined, r("HousePaintColor")) },
        { json: "animals", js: "animals", typ: u(undefined, "") },
        { json: "piecesOfHay", js: "piecesOfHay", typ: u(undefined, "") },
        { json: "grandpaScore", js: "grandpaScore", typ: u(undefined, "") },
        { json: "farmCaveReady", js: "farmCaveReady", typ: u(undefined, "") },
        { json: "hasSeenGrandpaNote", js: "hasSeenGrandpaNote", typ: u(undefined, "") },
        { json: "houseSource", js: "houseSource", typ: u(undefined, r("BoundingBox")) },
        { json: "greenhouseUnlocked", js: "greenhouseUnlocked", typ: u(undefined, "") },
        { json: "greenhouseMoved", js: "greenhouseMoved", typ: u(undefined, "") },
        { json: "petBowlWatered", js: "petBowlWatered", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "spousePatioSpot", js: "spousePatioSpot", typ: u(undefined, r("IncubatingEgg")) },
        { json: "Animals", js: "Animals", typ: u(undefined, r("GameLocationAnimals")) },
        { json: "wallPaper", js: "wallPaper", typ: u(undefined, "") },
        { json: "appliedWallpaper", js: "appliedWallpaper", typ: u(undefined, r("Applied")) },
        { json: "floor", js: "floor", typ: u(undefined, "") },
        { json: "appliedFloor", js: "appliedFloor", typ: u(undefined, r("Applied")) },
        { json: "farmerNumberOfOwner", js: "farmerNumberOfOwner", typ: u(undefined, "") },
        { json: "fireplaceOn", js: "fireplaceOn", typ: u(undefined, "") },
        { json: "fridge", js: "fridge", typ: u(undefined, r("Fridge")) },
        { json: "fridgePosition", js: "fridgePosition", typ: u(undefined, r("IncubatingEgg")) },
        { json: "cribStyle", js: "cribStyle", typ: u(undefined, "") },
        { json: "daysUntilCommunityUpgrade", js: "daysUntilCommunityUpgrade", typ: u(undefined, "") },
        { json: "itemsFromPlayerToSell", js: "itemsFromPlayerToSell", typ: u(undefined, "") },
        { json: "itemsToStartSellingTomorrow", js: "itemsToStartSellingTomorrow", typ: u(undefined, "") },
        { json: "bridgeFixed", js: "bridgeFixed", typ: u(undefined, "") },
        { json: "drivingOff", js: "drivingOff", typ: u(undefined, "") },
        { json: "drivingBack", js: "drivingBack", typ: u(undefined, "") },
        { json: "leaving", js: "leaving", typ: u(undefined, "") },
        { json: "hasSpawnedBugsToday", js: "hasSpawnedBugsToday", typ: u(undefined, "") },
        { json: "museumPieces", js: "museumPieces", typ: u(undefined, r("MuseumPieces")) },
        { json: "stumps", js: "stumps", typ: u(undefined, r("Umps")) },
        { json: "hasUnlockedStatue", js: "hasUnlockedStatue", typ: u(undefined, "") },
        { json: "witchStatueGone", js: "witchStatueGone", typ: u(undefined, "") },
        { json: "areasComplete", js: "areasComplete", typ: u(undefined, r("AreasComplete")) },
        { json: "numberOfStarsOnPlaque", js: "numberOfStarsOnPlaque", typ: u(undefined, "") },
        { json: "bundles", js: "bundles", typ: u(undefined, r("Bundles")) },
        { json: "bundleRewards", js: "bundleRewards", typ: u(undefined, r("ChestConsumedLevels")) },
        { json: "ownerUID", js: "ownerUID", typ: u(undefined, r("OwnerUIDClass")) },
        { json: "submerged", js: "submerged", typ: u(undefined, "") },
        { json: "ascending", js: "ascending", typ: u(undefined, "") },
        { json: "dayFirstEntered", js: "dayFirstEntered", typ: u(undefined, "") },
        { json: "nextRepathTime", js: "nextRepathTime", typ: u(undefined, "") },
        { json: "repathTimeInterval", js: "repathTimeInterval", typ: u(undefined, "") },
        { json: "gateRect", js: "gateRect", typ: u(undefined, r("BoundingBox")) },
        { json: "_plankPosition", js: "_plankPosition", typ: u(undefined, "") },
        { json: "_plankDirection", js: "_plankDirection", typ: u(undefined, "") },
        { json: "animationState", js: "animationState", typ: u(undefined, "") },
        { json: "shouldToggleResort", js: "shouldToggleResort", typ: u(undefined, "") },
        { json: "resortOpenToday", js: "resortOpenToday", typ: u(undefined, "") },
        { json: "resortRestored", js: "resortRestored", typ: u(undefined, "") },
        { json: "westernTurtleMoved", js: "westernTurtleMoved", typ: u(undefined, "") },
        { json: "mermaidPuzzleFinished", js: "mermaidPuzzleFinished", typ: u(undefined, "") },
        { json: "fishedWalnut", js: "fishedWalnut", typ: u(undefined, "") },
        { json: "drinksClaimed", js: "drinksClaimed", typ: u(undefined, "") },
        { json: "bananaShrineComplete", js: "bananaShrineComplete", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "bananaShrineNutAwarded", js: "bananaShrineNutAwarded", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "sandDuggy", js: "sandDuggy", typ: u(undefined, r("SandDuggy")) },
        { json: "farmhouseRestored", js: "farmhouseRestored", typ: u(undefined, "") },
        { json: "farmhouseMailbox", js: "farmhouseMailbox", typ: u(undefined, "") },
        { json: "farmObelisk", js: "farmObelisk", typ: u(undefined, "") },
        { json: "shippingBinPosition", js: "shippingBinPosition", typ: u(undefined, r("IncubatingEgg")) },
        { json: "traderActivated", js: "traderActivated", typ: u(undefined, "") },
        { json: "boulderRemoved", js: "boulderRemoved", typ: u(undefined, "") },
        { json: "caveOpened", js: "caveOpened", typ: u(undefined, "") },
        { json: "treeNutShot", js: "treeNutShot", typ: u(undefined, "") },
        { json: "treeNutObtained", js: "treeNutObtained", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "firstParrotDone", js: "firstParrotDone", typ: u(undefined, "") },
        { json: "completed", js: "completed", typ: u(undefined, "") },
        { json: "piecesDonated", js: "piecesDonated", typ: u(undefined, a("")) },
        { json: "centerSkeletonRestored", js: "centerSkeletonRestored", typ: u(undefined, "") },
        { json: "snakeRestored", js: "snakeRestored", typ: u(undefined, "") },
        { json: "batRestored", js: "batRestored", typ: u(undefined, "") },
        { json: "frogRestored", js: "frogRestored", typ: u(undefined, "") },
        { json: "plantsRestoredLeft", js: "plantsRestoredLeft", typ: u(undefined, "") },
        { json: "plantsRestoredRight", js: "plantsRestoredRight", typ: u(undefined, "") },
        { json: "hasFailedSurveyToday", js: "hasFailedSurveyToday", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "visited", js: "visited", typ: u(undefined, u(r("SleptInTemporaryBed"), "")) },
        { json: "puzzleFinished", js: "puzzleFinished", typ: u(undefined, "") },
        { json: "gourmandRequestsFulfilled", js: "gourmandRequestsFulfilled", typ: u(undefined, "") },
    ], false),
    "GameLocationAnimals": o([
        { json: "SerializableDictionaryOfInt64FarmAnimal", js: "SerializableDictionaryOfInt64FarmAnimal", typ: "" },
    ], false),
    "Applied": o([
        { json: "SerializableDictionaryOfStringString", js: "SerializableDictionaryOfStringString", typ: r("BundleData") },
    ], false),
    "AreasComplete": o([
        { json: "boolean", js: "boolean", typ: a("") },
    ], false),
    "Buildings": o([
        { json: "Building", js: "Building", typ: a(r("Building")) },
    ], false),
    "Building": o([
        { json: "tileX", js: "tileX", typ: "" },
        { json: "tileY", js: "tileY", typ: "" },
        { json: "tilesWide", js: "tilesWide", typ: "" },
        { json: "tilesHigh", js: "tilesHigh", typ: "" },
        { json: "maxOccupants", js: "maxOccupants", typ: "" },
        { json: "currentOccupants", js: "currentOccupants", typ: "" },
        { json: "daysOfConstructionLeft", js: "daysOfConstructionLeft", typ: "" },
        { json: "daysUntilUpgrade", js: "daysUntilUpgrade", typ: "" },
        { json: "buildingType", js: "buildingType", typ: "" },
        { json: "buildingPaintColor", js: "buildingPaintColor", typ: r("BuildingPaintColor") },
        { json: "humanDoor", js: "humanDoor", typ: r("IncubatingEgg") },
        { json: "animalDoor", js: "animalDoor", typ: r("IncubatingEgg") },
        { json: "color", js: "color", typ: r("Color") },
        { json: "animalDoorOpen", js: "animalDoorOpen", typ: "" },
        { json: "magical", js: "magical", typ: "" },
        { json: "fadeWhenPlayerIsBehind", js: "fadeWhenPlayerIsBehind", typ: "" },
        { json: "owner", js: "owner", typ: "" },
        { json: "isMoving", js: "isMoving", typ: "" },
        { json: "indoors", js: "indoors", typ: u(undefined, r("Indoors")) },
        { json: "fishType", js: "fishType", typ: u(undefined, r("MaxEntries")) },
        { json: "lastUnlockedPopulationGate", js: "lastUnlockedPopulationGate", typ: u(undefined, r("MaxEntries")) },
        { json: "hasCompletedRequest", js: "hasCompletedRequest", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "sign", js: "sign", typ: u(undefined, r("Sign")) },
        { json: "overrideWaterColor", js: "overrideWaterColor", typ: u(undefined, r("OverrideWaterColor")) },
        { json: "output", js: "output", typ: u(undefined, r("Output")) },
        { json: "neededItem", js: "neededItem", typ: u(undefined, r("NeededItem")) },
        { json: "neededItemCount", js: "neededItemCount", typ: u(undefined, r("MaxEntries")) },
        { json: "daysSinceSpawn", js: "daysSinceSpawn", typ: u(undefined, r("MaxEntries")) },
        { json: "nettingStyle", js: "nettingStyle", typ: u(undefined, r("MaxEntries")) },
        { json: "seedOffset", js: "seedOffset", typ: u(undefined, r("MaxEntries")) },
        { json: "hasSpawnedFish", js: "hasSpawnedFish", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "input", js: "input", typ: u(undefined, r("Input")) },
    ], false),
    "BuildingPaintColor": o([
        { json: "ColorName", js: "ColorName", typ: r("Mailbox") },
        { json: "Color1Default", js: "Color1Default", typ: r("SleptInTemporaryBed") },
        { json: "Color1Hue", js: "Color1Hue", typ: r("MaxEntries") },
        { json: "Color1Saturation", js: "Color1Saturation", typ: r("MaxEntries") },
        { json: "Color1Lightness", js: "Color1Lightness", typ: r("MaxEntries") },
        { json: "Color2Default", js: "Color2Default", typ: r("SleptInTemporaryBed") },
        { json: "Color2Hue", js: "Color2Hue", typ: r("MaxEntries") },
        { json: "Color2Saturation", js: "Color2Saturation", typ: r("MaxEntries") },
        { json: "Color2Lightness", js: "Color2Lightness", typ: r("MaxEntries") },
        { json: "Color3Default", js: "Color3Default", typ: r("SleptInTemporaryBed") },
        { json: "Color3Hue", js: "Color3Hue", typ: r("MaxEntries") },
        { json: "Color3Saturation", js: "Color3Saturation", typ: r("MaxEntries") },
        { json: "Color3Lightness", js: "Color3Lightness", typ: r("MaxEntries") },
    ], false),
    "Indoors": o([
        { json: "characters", js: "characters", typ: "" },
        { json: "objects", js: "objects", typ: r("IndoorsObjects") },
        { json: "resourceClumps", js: "resourceClumps", typ: "" },
        { json: "largeTerrainFeatures", js: "largeTerrainFeatures", typ: "" },
        { json: "terrainFeatures", js: "terrainFeatures", typ: "" },
        { json: "uniqueName", js: "uniqueName", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "waterColor", js: "waterColor", typ: r("Color") },
        { json: "isFarm", js: "isFarm", typ: "" },
        { json: "isOutdoors", js: "isOutdoors", typ: "" },
        { json: "isStructure", js: "isStructure", typ: "" },
        { json: "ignoreDebrisWeather", js: "ignoreDebrisWeather", typ: "" },
        { json: "ignoreOutdoorLighting", js: "ignoreOutdoorLighting", typ: "" },
        { json: "ignoreLights", js: "ignoreLights", typ: "" },
        { json: "treatAsOutdoors", js: "treatAsOutdoors", typ: "" },
        { json: "numberOfSpawnedObjectsOnMap", js: "numberOfSpawnedObjectsOnMap", typ: "" },
        { json: "miniJukeboxCount", js: "miniJukeboxCount", typ: "" },
        { json: "miniJukeboxTrack", js: "miniJukeboxTrack", typ: "" },
        { json: "furniture", js: "furniture", typ: u(r("PurpleFurniture"), "") },
        { json: "IsGreenhouse", js: "IsGreenhouse", typ: "" },
        { json: "animals", js: "animals", typ: r("Animals") },
        { json: "animalLimit", js: "animalLimit", typ: "" },
        { json: "animalsThatLiveHere", js: "animalsThatLiveHere", typ: r("AnimalsThatLiveHere") },
        { json: "incubatingEgg", js: "incubatingEgg", typ: r("IncubatingEgg") },
        { json: "Animals", js: "Animals", typ: r("IndoorsAnimals") },
    ], false),
    "IndoorsAnimals": o([
        { json: "SerializableDictionaryOfInt64FarmAnimal", js: "SerializableDictionaryOfInt64FarmAnimal", typ: r("Animals") },
    ], false),
    "Animals": o([
        { json: "item", js: "item", typ: a(r("AnimalsItem")) },
    ], false),
    "AnimalsItem": o([
        { json: "key", js: "key", typ: r("OwnerUIDClass") },
        { json: "value", js: "value", typ: r("FluffyValue") },
    ], false),
    "FluffyValue": o([
        { json: "FarmAnimal", js: "FarmAnimal", typ: r("FarmAnimal") },
    ], false),
    "FarmAnimal": o([
        { json: "name", js: "name", typ: "" },
        { json: "forceOneTileWide", js: "forceOneTileWide", typ: "" },
        { json: "isEmoting", js: "isEmoting", typ: "" },
        { json: "isCharging", js: "isCharging", typ: "" },
        { json: "isGlowing", js: "isGlowing", typ: "" },
        { json: "coloredBorder", js: "coloredBorder", typ: "" },
        { json: "flip", js: "flip", typ: "" },
        { json: "drawOnTop", js: "drawOnTop", typ: "" },
        { json: "faceTowardFarmer", js: "faceTowardFarmer", typ: "" },
        { json: "ignoreMovementAnimation", js: "ignoreMovementAnimation", typ: "" },
        { json: "faceAwayFromFarmer", js: "faceAwayFromFarmer", typ: "" },
        { json: "scale", js: "scale", typ: r("Scale") },
        { json: "timeBeforeAIMovementAgain", js: "timeBeforeAIMovementAgain", typ: "" },
        { json: "glowingTransparency", js: "glowingTransparency", typ: "" },
        { json: "glowRate", js: "glowRate", typ: "" },
        { json: "willDestroyObjectsUnderfoot", js: "willDestroyObjectsUnderfoot", typ: "" },
        { json: "Position", js: "Position", typ: r("IncubatingEgg") },
        { json: "Speed", js: "Speed", typ: "" },
        { json: "FacingDirection", js: "FacingDirection", typ: "" },
        { json: "IsEmoting", js: "IsEmoting", typ: "" },
        { json: "CurrentEmote", js: "CurrentEmote", typ: "" },
        { json: "Scale", js: "Scale", typ: "" },
        { json: "isSwimming", js: "isSwimming", typ: r("SleptInTemporaryBed") },
        { json: "defaultProduceIndex", js: "defaultProduceIndex", typ: "" },
        { json: "deluxeProduceIndex", js: "deluxeProduceIndex", typ: "" },
        { json: "currentProduce", js: "currentProduce", typ: "" },
        { json: "friendshipTowardFarmer", js: "friendshipTowardFarmer", typ: "" },
        { json: "daysSinceLastFed", js: "daysSinceLastFed", typ: "" },
        { json: "pushAccumulator", js: "pushAccumulator", typ: "" },
        { json: "uniqueFrameAccumulator", js: "uniqueFrameAccumulator", typ: "" },
        { json: "age", js: "age", typ: "" },
        { json: "daysOwned", js: "daysOwned", typ: "" },
        { json: "meatIndex", js: "meatIndex", typ: "" },
        { json: "health", js: "health", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "produceQuality", js: "produceQuality", typ: "" },
        { json: "daysToLay", js: "daysToLay", typ: "" },
        { json: "daysSinceLastLay", js: "daysSinceLastLay", typ: "" },
        { json: "ageWhenMature", js: "ageWhenMature", typ: "" },
        { json: "harvestType", js: "harvestType", typ: "" },
        { json: "happiness", js: "happiness", typ: "" },
        { json: "fullness", js: "fullness", typ: "" },
        { json: "happinessDrain", js: "happinessDrain", typ: "" },
        { json: "fullnessDrain", js: "fullnessDrain", typ: "" },
        { json: "wasAutoPet", js: "wasAutoPet", typ: "" },
        { json: "wasPet", js: "wasPet", typ: "" },
        { json: "showDifferentTextureWhenReadyForHarvest", js: "showDifferentTextureWhenReadyForHarvest", typ: "" },
        { json: "allowReproduction", js: "allowReproduction", typ: "" },
        { json: "sound", js: "sound", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "buildingTypeILiveIn", js: "buildingTypeILiveIn", typ: r("BuildingTypeILiveIn") },
        { json: "toolUsedForHarvest", js: "toolUsedForHarvest", typ: r("ToolUsedForHarvest") },
        { json: "frontBackBoundingBox", js: "frontBackBoundingBox", typ: r("BoundingBox") },
        { json: "sidewaysBoundingBox", js: "sidewaysBoundingBox", typ: r("BoundingBox") },
        { json: "frontBackSourceRect", js: "frontBackSourceRect", typ: r("BoundingBox") },
        { json: "sidewaysSourceRect", js: "sidewaysSourceRect", typ: r("BoundingBox") },
        { json: "myID", js: "myID", typ: "" },
        { json: "ownerID", js: "ownerID", typ: "" },
        { json: "parentId", js: "parentId", typ: "" },
        { json: "homeLocation", js: "homeLocation", typ: r("IncubatingEgg") },
        { json: "moodMessage", js: "moodMessage", typ: "" },
        { json: "isEating", js: "isEating", typ: "" },
        { json: "displayName", js: "displayName", typ: "" },
    ], false),
    "AnimalsThatLiveHere": o([
        { json: "long", js: "long", typ: a("") },
    ], false),
    "PurpleFurniture": o([
        { json: "Furniture", js: "Furniture", typ: a(r("DishOfTheDay")) },
    ], false),
    "IndoorsObjects": o([
        { json: "item", js: "item", typ: a(r("ObjectsItemClass")) },
    ], false),
    "ObjectsItemClass": o([
        { json: "key", js: "key", typ: r("FluffyKey") },
        { json: "value", js: "value", typ: r("TentacledValue") },
    ], false),
    "FluffyKey": o([
        { json: "Vector2", js: "Vector2", typ: r("IncubatingEgg") },
    ], false),
    "TentacledValue": o([
        { json: "Object", js: "Object", typ: r("PurpleObject") },
    ], false),
    "PurpleObject": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: r("DishOfTheDayType") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "currentLidFrame", js: "currentLidFrame", typ: u(undefined, "") },
        { json: "lidFrameCount", js: "lidFrameCount", typ: u(undefined, r("MaxEntries")) },
        { json: "frameCounter", js: "frameCounter", typ: u(undefined, "") },
        { json: "coins", js: "coins", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("ObjectItemsClass")) },
        { json: "separateWalletItems", js: "separateWalletItems", typ: u(undefined, r("SeparateWalletItems")) },
        { json: "chestType", js: "chestType", typ: u(undefined, "") },
        { json: "tint", js: "tint", typ: u(undefined, r("Color")) },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: u(undefined, r("Color")) },
        { json: "playerChest", js: "playerChest", typ: u(undefined, "") },
        { json: "fridge", js: "fridge", typ: u(undefined, "") },
        { json: "giftbox", js: "giftbox", typ: u(undefined, "") },
        { json: "giftboxIndex", js: "giftboxIndex", typ: u(undefined, "") },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: u(undefined, "") },
        { json: "dropContents", js: "dropContents", typ: u(undefined, "") },
        { json: "synchronized", js: "synchronized", typ: u(undefined, "") },
        { json: "specialChestType", js: "specialChestType", typ: u(undefined, r("SpecialChestType")) },
        { json: "heldObject", js: "heldObject", typ: u(undefined, r("DishOfTheDay")) },
    ], false),
    "ObjectItemsClass": o([
        { json: "Item", js: "Item", typ: u(a(r("DisplayItemElement")), r("DishOfTheDay")) },
    ], false),
    "DisplayItemElement": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: u(undefined, "") },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: u(undefined, r("IncubatingEgg")) },
        { json: "owner", js: "owner", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: u(undefined, "") },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: u(undefined, "") },
        { json: "isHoedirt", js: "isHoedirt", typ: u(undefined, "") },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: u(undefined, "") },
        { json: "questItem", js: "questItem", typ: u(undefined, "") },
        { json: "questId", js: "questId", typ: u(undefined, "") },
        { json: "isOn", js: "isOn", typ: u(undefined, "") },
        { json: "fragility", js: "fragility", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "edibility", js: "edibility", typ: u(undefined, "") },
        { json: "stack", js: "stack", typ: u(undefined, "") },
        { json: "quality", js: "quality", typ: u(undefined, "") },
        { json: "bigCraftable", js: "bigCraftable", typ: u(undefined, "") },
        { json: "setOutdoors", js: "setOutdoors", typ: u(undefined, "") },
        { json: "setIndoors", js: "setIndoors", typ: u(undefined, "") },
        { json: "readyForHarvest", js: "readyForHarvest", typ: u(undefined, "") },
        { json: "showNextIndex", js: "showNextIndex", typ: u(undefined, "") },
        { json: "flipped", js: "flipped", typ: u(undefined, "") },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: u(undefined, "") },
        { json: "isRecipe", js: "isRecipe", typ: u(undefined, "") },
        { json: "isLamp", js: "isLamp", typ: u(undefined, "") },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: u(undefined, "") },
        { json: "boundingBox", js: "boundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "scale", js: "scale", typ: u(undefined, r("IncubatingEgg")) },
        { json: "uses", js: "uses", typ: u(undefined, "") },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: u(undefined, "") },
        { json: "destroyOvernight", js: "destroyOvernight", typ: u(undefined, "") },
        { json: "initialParentTileIndex", js: "initialParentTileIndex", typ: u(undefined, "") },
        { json: "currentParentTileIndex", js: "currentParentTileIndex", typ: u(undefined, "") },
        { json: "indexOfMenuItemView", js: "indexOfMenuItemView", typ: u(undefined, "") },
        { json: "stackable", js: "stackable", typ: u(undefined, "") },
        { json: "instantUse", js: "instantUse", typ: u(undefined, "") },
        { json: "isEfficient", js: "isEfficient", typ: u(undefined, "") },
        { json: "animationSpeedModifier", js: "animationSpeedModifier", typ: u(undefined, "") },
        { json: "upgradeLevel", js: "upgradeLevel", typ: u(undefined, "") },
        { json: "numAttachmentSlots", js: "numAttachmentSlots", typ: u(undefined, "") },
        { json: "attachments", js: "attachments", typ: u(undefined, "") },
        { json: "BaseName", js: "BaseName", typ: u(undefined, "") },
        { json: "InitialParentTileIndex", js: "InitialParentTileIndex", typ: u(undefined, "") },
        { json: "IndexOfMenuItemView", js: "IndexOfMenuItemView", typ: u(undefined, "") },
        { json: "InstantUse", js: "InstantUse", typ: u(undefined, "") },
        { json: "IsEfficient", js: "IsEfficient", typ: u(undefined, "") },
        { json: "AnimationSpeedModifier", js: "AnimationSpeedModifier", typ: u(undefined, "") },
        { json: "Stackable", js: "Stackable", typ: u(undefined, "") },
        { json: "furniture_type", js: "furniture_type", typ: u(undefined, "") },
        { json: "rotations", js: "rotations", typ: u(undefined, "") },
        { json: "currentRotation", js: "currentRotation", typ: u(undefined, "") },
        { json: "sourceRect", js: "sourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultSourceRect", js: "defaultSourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultBoundingBox", js: "defaultBoundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "drawHeldObjectLow", js: "drawHeldObjectLow", typ: u(undefined, "") },
        { json: "additionalPower", js: "additionalPower", typ: u(undefined, r("MaxEntries")) },
        { json: "minDamage", js: "minDamage", typ: u(undefined, "") },
        { json: "maxDamage", js: "maxDamage", typ: u(undefined, "") },
        { json: "speed", js: "speed", typ: u(undefined, "") },
        { json: "addedPrecision", js: "addedPrecision", typ: u(undefined, "") },
        { json: "addedDefense", js: "addedDefense", typ: u(undefined, "") },
        { json: "addedAreaOfEffect", js: "addedAreaOfEffect", typ: u(undefined, "") },
        { json: "knockback", js: "knockback", typ: u(undefined, "") },
        { json: "critChance", js: "critChance", typ: u(undefined, "") },
        { json: "critMultiplier", js: "critMultiplier", typ: u(undefined, "") },
        { json: "appearance", js: "appearance", typ: u(undefined, "") },
        { json: "isOnSpecial", js: "isOnSpecial", typ: u(undefined, "") },
    ], false),
    "SeparateWalletItems": o([
        { json: "SerializableDictionaryOfInt64NetObjectListOfItem", js: "SerializableDictionaryOfInt64NetObjectListOfItem", typ: "" },
    ], false),
    "Input": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: r("DishOfTheDayType") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "currentLidFrame", js: "currentLidFrame", typ: "" },
        { json: "lidFrameCount", js: "lidFrameCount", typ: r("MaxEntries") },
        { json: "frameCounter", js: "frameCounter", typ: "" },
        { json: "coins", js: "coins", typ: "" },
        { json: "items", js: "items", typ: r("InputItems") },
        { json: "separateWalletItems", js: "separateWalletItems", typ: r("SeparateWalletItems") },
        { json: "chestType", js: "chestType", typ: "" },
        { json: "tint", js: "tint", typ: r("Color") },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: r("Color") },
        { json: "playerChest", js: "playerChest", typ: "" },
        { json: "fridge", js: "fridge", typ: "" },
        { json: "giftbox", js: "giftbox", typ: "" },
        { json: "giftboxIndex", js: "giftboxIndex", typ: "" },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: "" },
        { json: "dropContents", js: "dropContents", typ: "" },
        { json: "synchronized", js: "synchronized", typ: "" },
        { json: "specialChestType", js: "specialChestType", typ: r("SpecialChestType") },
    ], false),
    "InputItems": o([
        { json: "Item", js: "Item", typ: "" },
    ], false),
    "NeededItem": o([
        { json: "Object", js: "Object", typ: u(r("DishOfTheDay"), "") },
    ], false),
    "Output": o([
        { json: "Item", js: "Item", typ: u(undefined, r("DishOfTheDay")) },
        { json: "isLostItem", js: "isLostItem", typ: u(undefined, "") },
        { json: "category", js: "category", typ: u(undefined, "") },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: u(undefined, "") },
        { json: "specialItem", js: "specialItem", typ: u(undefined, "") },
        { json: "SpecialVariable", js: "SpecialVariable", typ: u(undefined, "") },
        { json: "DisplayName", js: "DisplayName", typ: u(undefined, "") },
        { json: "Name", js: "Name", typ: u(undefined, "") },
        { json: "Stack", js: "Stack", typ: u(undefined, "") },
        { json: "tileLocation", js: "tileLocation", typ: u(undefined, r("IncubatingEgg")) },
        { json: "owner", js: "owner", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, r("DishOfTheDayType")) },
        { json: "canBeSetDown", js: "canBeSetDown", typ: u(undefined, "") },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: u(undefined, "") },
        { json: "isHoedirt", js: "isHoedirt", typ: u(undefined, "") },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: u(undefined, "") },
        { json: "questItem", js: "questItem", typ: u(undefined, "") },
        { json: "questId", js: "questId", typ: u(undefined, "") },
        { json: "isOn", js: "isOn", typ: u(undefined, "") },
        { json: "fragility", js: "fragility", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "edibility", js: "edibility", typ: u(undefined, "") },
        { json: "stack", js: "stack", typ: u(undefined, "") },
        { json: "quality", js: "quality", typ: u(undefined, "") },
        { json: "bigCraftable", js: "bigCraftable", typ: u(undefined, "") },
        { json: "setOutdoors", js: "setOutdoors", typ: u(undefined, "") },
        { json: "setIndoors", js: "setIndoors", typ: u(undefined, "") },
        { json: "readyForHarvest", js: "readyForHarvest", typ: u(undefined, "") },
        { json: "showNextIndex", js: "showNextIndex", typ: u(undefined, "") },
        { json: "flipped", js: "flipped", typ: u(undefined, "") },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: u(undefined, "") },
        { json: "isRecipe", js: "isRecipe", typ: u(undefined, "") },
        { json: "isLamp", js: "isLamp", typ: u(undefined, "") },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: u(undefined, "") },
        { json: "boundingBox", js: "boundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "scale", js: "scale", typ: u(undefined, r("IncubatingEgg")) },
        { json: "uses", js: "uses", typ: u(undefined, "") },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: u(undefined, "") },
        { json: "destroyOvernight", js: "destroyOvernight", typ: u(undefined, "") },
        { json: "currentLidFrame", js: "currentLidFrame", typ: u(undefined, "") },
        { json: "lidFrameCount", js: "lidFrameCount", typ: u(undefined, r("MaxEntries")) },
        { json: "frameCounter", js: "frameCounter", typ: u(undefined, "") },
        { json: "coins", js: "coins", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, "") },
        { json: "separateWalletItems", js: "separateWalletItems", typ: u(undefined, r("SeparateWalletItems")) },
        { json: "chestType", js: "chestType", typ: u(undefined, "") },
        { json: "tint", js: "tint", typ: u(undefined, r("Color")) },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: u(undefined, r("Color")) },
        { json: "playerChest", js: "playerChest", typ: u(undefined, "") },
        { json: "fridge", js: "fridge", typ: u(undefined, "") },
        { json: "giftbox", js: "giftbox", typ: u(undefined, "") },
        { json: "giftboxIndex", js: "giftboxIndex", typ: u(undefined, "") },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: u(undefined, "") },
        { json: "dropContents", js: "dropContents", typ: u(undefined, "") },
        { json: "synchronized", js: "synchronized", typ: u(undefined, "") },
        { json: "specialChestType", js: "specialChestType", typ: u(undefined, r("SpecialChestType")) },
    ], false),
    "OverrideWaterColor": o([
        { json: "Color", js: "Color", typ: r("Color") },
    ], false),
    "Sign": o([
        { json: "Object", js: "Object", typ: r("DishOfTheDay") },
    ], false),
    "ChestConsumedLevels": o([
        { json: "item", js: "item", typ: a(r("ChestConsumedLevelsItem")) },
    ], false),
    "ChestConsumedLevelsItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("SleptInTemporaryBed") },
    ], false),
    "Bundles": o([
        { json: "item", js: "item", typ: a(r("BundlesItem")) },
    ], false),
    "BundlesItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("StickyValue") },
    ], false),
    "StickyValue": o([
        { json: "ArrayOfBoolean", js: "ArrayOfBoolean", typ: r("AreasComplete") },
    ], false),
    "CharactersClass": o([
        { json: "NPC", js: "NPC", typ: u(a(r("NPCElement")), r("NPCElement")) },
    ], false),
    "NPCElement": o([
        { json: "name", js: "name", typ: "" },
        { json: "forceOneTileWide", js: "forceOneTileWide", typ: "" },
        { json: "isEmoting", js: "isEmoting", typ: "" },
        { json: "isCharging", js: "isCharging", typ: "" },
        { json: "isGlowing", js: "isGlowing", typ: "" },
        { json: "coloredBorder", js: "coloredBorder", typ: "" },
        { json: "flip", js: "flip", typ: "" },
        { json: "drawOnTop", js: "drawOnTop", typ: "" },
        { json: "faceTowardFarmer", js: "faceTowardFarmer", typ: "" },
        { json: "ignoreMovementAnimation", js: "ignoreMovementAnimation", typ: "" },
        { json: "faceAwayFromFarmer", js: "faceAwayFromFarmer", typ: "" },
        { json: "scale", js: "scale", typ: r("Scale") },
        { json: "timeBeforeAIMovementAgain", js: "timeBeforeAIMovementAgain", typ: "" },
        { json: "glowingTransparency", js: "glowingTransparency", typ: "" },
        { json: "glowRate", js: "glowRate", typ: "" },
        { json: "willDestroyObjectsUnderfoot", js: "willDestroyObjectsUnderfoot", typ: "" },
        { json: "Position", js: "Position", typ: r("IncubatingEgg") },
        { json: "Speed", js: "Speed", typ: "" },
        { json: "FacingDirection", js: "FacingDirection", typ: "" },
        { json: "IsEmoting", js: "IsEmoting", typ: "" },
        { json: "CurrentEmote", js: "CurrentEmote", typ: "" },
        { json: "Scale", js: "Scale", typ: "" },
        { json: "lastCrossroad", js: "lastCrossroad", typ: r("BoundingBox") },
        { json: "daysAfterLastBirth", js: "daysAfterLastBirth", typ: "" },
        { json: "birthday_Season", js: "birthday_Season", typ: u(undefined, r("CurrentSeason")) },
        { json: "birthday_Day", js: "birthday_Day", typ: "" },
        { json: "age", js: "age", typ: "" },
        { json: "manners", js: "manners", typ: "" },
        { json: "socialAnxiety", js: "socialAnxiety", typ: "" },
        { json: "optimism", js: "optimism", typ: "" },
        { json: "gender", js: "gender", typ: "" },
        { json: "sleptInBed", js: "sleptInBed", typ: "" },
        { json: "isInvisible", js: "isInvisible", typ: "" },
        { json: "lastSeenMovieWeek", js: "lastSeenMovieWeek", typ: "" },
        { json: "datingFarmer", js: "datingFarmer", typ: "" },
        { json: "divorcedFromFarmer", js: "divorcedFromFarmer", typ: "" },
        { json: "datable", js: "datable", typ: "" },
        { json: "defaultMap", js: "defaultMap", typ: u(undefined, "") },
        { json: "loveInterest", js: "loveInterest", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "homeRegion", js: "homeRegion", typ: "" },
        { json: "daysUntilNotInvisible", js: "daysUntilNotInvisible", typ: "" },
        { json: "followSchedule", js: "followSchedule", typ: "" },
        { json: "moveTowardPlayerThreshold", js: "moveTowardPlayerThreshold", typ: "" },
        { json: "hasBeenKissedToday", js: "hasBeenKissedToday", typ: r("SleptInTemporaryBed") },
        { json: "shouldPlayRobinHammerAnimation", js: "shouldPlayRobinHammerAnimation", typ: r("SleptInTemporaryBed") },
        { json: "shouldPlaySpousePatioAnimation", js: "shouldPlaySpousePatioAnimation", typ: r("SleptInTemporaryBed") },
        { json: "shouldWearIslandAttire", js: "shouldWearIslandAttire", typ: r("SleptInTemporaryBed") },
        { json: "isMovingOnPathFindPath", js: "isMovingOnPathFindPath", typ: r("SleptInTemporaryBed") },
        { json: "queuedSchedulePaths", js: "queuedSchedulePaths", typ: "" },
        { json: "lastAttemptedSchedule", js: "lastAttemptedSchedule", typ: "" },
        { json: "dayScheduleName", js: "dayScheduleName", typ: u(undefined, "") },
        { json: "endOfRouteBehaviorName", js: "endOfRouteBehaviorName", typ: r("Mailbox") },
        { json: "squareMovementFacingPreference", js: "squareMovementFacingPreference", typ: "" },
        { json: "DefaultFacingDirection", js: "DefaultFacingDirection", typ: "" },
        { json: "DefaultMap", js: "DefaultMap", typ: u(undefined, "") },
        { json: "DefaultPosition", js: "DefaultPosition", typ: r("IncubatingEgg") },
        { json: "IsWalkingInSquare", js: "IsWalkingInSquare", typ: "" },
        { json: "IsWalkingTowardPlayer", js: "IsWalkingTowardPlayer", typ: "" },
        { json: "whichBreed", js: "whichBreed", typ: u(undefined, "") },
        { json: "lastPetDay", js: "lastPetDay", typ: u(undefined, r("LastPetDay")) },
        { json: "grantedFriendshipForPet", js: "grantedFriendshipForPet", typ: u(undefined, "") },
        { json: "friendshipTowardFarmer", js: "friendshipTowardFarmer", typ: u(undefined, "") },
        { json: "isSleepingOnFarmerBed", js: "isSleepingOnFarmerBed", typ: u(undefined, r("SleptInTemporaryBed")) },
        { json: "CurrentBehavior", js: "CurrentBehavior", typ: u(undefined, "") },
    ], false),
    "LastPetDay": o([
        { json: "item", js: "item", typ: r("LastPetDayItem") },
    ], false),
    "LastPetDayItem": o([
        { json: "key", js: "key", typ: r("OwnerUIDClass") },
        { json: "value", js: "value", typ: r("MaxEntries") },
    ], false),
    "Fridge": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: r("DishOfTheDayType") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "currentLidFrame", js: "currentLidFrame", typ: "" },
        { json: "lidFrameCount", js: "lidFrameCount", typ: r("MaxEntries") },
        { json: "frameCounter", js: "frameCounter", typ: "" },
        { json: "coins", js: "coins", typ: "" },
        { json: "items", js: "items", typ: u(r("ItemsLostLastDeathClass"), "") },
        { json: "separateWalletItems", js: "separateWalletItems", typ: r("SeparateWalletItems") },
        { json: "chestType", js: "chestType", typ: "" },
        { json: "tint", js: "tint", typ: r("Color") },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: r("Color") },
        { json: "playerChest", js: "playerChest", typ: "" },
        { json: "fridge", js: "fridge", typ: "" },
        { json: "giftbox", js: "giftbox", typ: "" },
        { json: "giftboxIndex", js: "giftboxIndex", typ: "" },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: "" },
        { json: "dropContents", js: "dropContents", typ: "" },
        { json: "synchronized", js: "synchronized", typ: "" },
        { json: "specialChestType", js: "specialChestType", typ: r("SpecialChestType") },
    ], false),
    "ItemsLostLastDeathClass": o([
        { json: "Item", js: "Item", typ: a(r("DishOfTheDay")) },
    ], false),
    "FluffyFurniture": o([
        { json: "Furniture", js: "Furniture", typ: u(a(r("DishOfTheDay")), r("DishOfTheDay")) },
    ], false),
    "HousePaintColor": o([
        { json: "BuildingPaintColor", js: "BuildingPaintColor", typ: r("BuildingPaintColor") },
    ], false),
    "LargeTerrainFeaturesClass": o([
        { json: "LargeTerrainFeature", js: "LargeTerrainFeature", typ: u(a(r("LargeTerrainFeatureElement")), r("LargeTerrainFeatureElement")) },
    ], false),
    "LargeTerrainFeatureElement": o([
        { json: "tilePosition", js: "tilePosition", typ: r("IncubatingEgg") },
        { json: "size", js: "size", typ: "" },
        { json: "datePlanted", js: "datePlanted", typ: "" },
        { json: "tileSheetOffset", js: "tileSheetOffset", typ: "" },
        { json: "overrideSeason", js: "overrideSeason", typ: "" },
        { json: "health", js: "health", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "townBush", js: "townBush", typ: "" },
        { json: "greenhouseBush", js: "greenhouseBush", typ: "" },
        { json: "drawShadow", js: "drawShadow", typ: "" },
    ], false),
    "MuseumPieces": o([
        { json: "item", js: "item", typ: a(r("MuseumPiecesItem")) },
    ], false),
    "MuseumPiecesItem": o([
        { json: "key", js: "key", typ: r("FluffyKey") },
        { json: "value", js: "value", typ: r("MaxEntries") },
    ], false),
    "ObjectsObjects": o([
        { json: "item", js: "item", typ: u(a(r("PurpleItem")), r("FluffyItem")) },
    ], false),
    "PurpleItem": o([
        { json: "key", js: "key", typ: r("FluffyKey") },
        { json: "value", js: "value", typ: r("IndigoValue") },
    ], false),
    "IndigoValue": o([
        { json: "Object", js: "Object", typ: r("FluffyObject") },
    ], false),
    "FluffyObject": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("PurpleType")) },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "heldObject", js: "heldObject", typ: u(undefined, r("DishOfTheDay")) },
        { json: "health", js: "health", typ: u(undefined, "") },
        { json: "maxHealth", js: "maxHealth", typ: u(undefined, "") },
        { json: "whichType", js: "whichType", typ: u(undefined, "") },
        { json: "gatePosition", js: "gatePosition", typ: u(undefined, "") },
        { json: "gateMotion", js: "gateMotion", typ: u(undefined, "") },
        { json: "isGate", js: "isGate", typ: u(undefined, "") },
        { json: "currentLidFrame", js: "currentLidFrame", typ: u(undefined, "") },
        { json: "lidFrameCount", js: "lidFrameCount", typ: u(undefined, r("MaxEntries")) },
        { json: "frameCounter", js: "frameCounter", typ: u(undefined, "") },
        { json: "coins", js: "coins", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, u(r("PurpleItems"), "")) },
        { json: "separateWalletItems", js: "separateWalletItems", typ: u(undefined, r("SeparateWalletItems")) },
        { json: "chestType", js: "chestType", typ: u(undefined, "") },
        { json: "tint", js: "tint", typ: u(undefined, r("Color")) },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: u(undefined, r("Color")) },
        { json: "playerChest", js: "playerChest", typ: u(undefined, "") },
        { json: "fridge", js: "fridge", typ: u(undefined, "") },
        { json: "giftbox", js: "giftbox", typ: u(undefined, "") },
        { json: "giftboxIndex", js: "giftboxIndex", typ: u(undefined, "") },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: u(undefined, "") },
        { json: "dropContents", js: "dropContents", typ: u(undefined, "") },
        { json: "synchronized", js: "synchronized", typ: u(undefined, "") },
        { json: "specialChestType", js: "specialChestType", typ: u(undefined, r("SpecialChestType")) },
        { json: "displayItem", js: "displayItem", typ: u(undefined, r("DisplayItemElement")) },
        { json: "displayType", js: "displayType", typ: u(undefined, "") },
        { json: "hoeDirt", js: "hoeDirt", typ: u(undefined, r("HoeDirt")) },
        { json: "directionOffset", js: "directionOffset", typ: u(undefined, r("IncubatingEgg")) },
        { json: "bait", js: "bait", typ: u(undefined, r("DishOfTheDay")) },
        { json: "tileIndexToShow", js: "tileIndexToShow", typ: u(undefined, "") },
        { json: "agingRate", js: "agingRate", typ: u(undefined, "") },
        { json: "daysToMature", js: "daysToMature", typ: u(undefined, "") },
        { json: "pedestalType", js: "pedestalType", typ: u(undefined, "") },
        { json: "requiredItem", js: "requiredItem", typ: u(undefined, r("DishOfTheDay")) },
        { json: "successColor", js: "successColor", typ: u(undefined, r("Color")) },
        { json: "lockOnSuccess", js: "lockOnSuccess", typ: u(undefined, "") },
        { json: "locked", js: "locked", typ: u(undefined, "") },
        { json: "match", js: "match", typ: u(undefined, "") },
    ], false),
    "HoeDirt": o([
        { json: "state", js: "state", typ: "" },
        { json: "fertilizer", js: "fertilizer", typ: "" },
        { json: "isGreenhouseDirt", js: "isGreenhouseDirt", typ: "" },
        { json: "crop", js: "crop", typ: r("HoeDirtCrop") },
    ], false),
    "HoeDirtCrop": o([
        { json: "phaseDays", js: "phaseDays", typ: r("CropsOfTheWeek") },
        { json: "rowInSpriteSheet", js: "rowInSpriteSheet", typ: "" },
        { json: "phaseToShow", js: "phaseToShow", typ: "" },
        { json: "currentPhase", js: "currentPhase", typ: "" },
        { json: "harvestMethod", js: "harvestMethod", typ: "" },
        { json: "indexOfHarvest", js: "indexOfHarvest", typ: "" },
        { json: "regrowAfterHarvest", js: "regrowAfterHarvest", typ: "" },
        { json: "dayOfCurrentPhase", js: "dayOfCurrentPhase", typ: "" },
        { json: "minHarvest", js: "minHarvest", typ: "" },
        { json: "maxHarvest", js: "maxHarvest", typ: "" },
        { json: "maxHarvestIncreasePerFarmingLevel", js: "maxHarvestIncreasePerFarmingLevel", typ: "" },
        { json: "daysOfUnclutteredGrowth", js: "daysOfUnclutteredGrowth", typ: "" },
        { json: "whichForageCrop", js: "whichForageCrop", typ: "" },
        { json: "seasonsToGrowIn", js: "seasonsToGrowIn", typ: r("BroadcastedMail") },
        { json: "tintColor", js: "tintColor", typ: r("Color") },
        { json: "flip", js: "flip", typ: "" },
        { json: "fullGrown", js: "fullGrown", typ: "" },
        { json: "raisedSeeds", js: "raisedSeeds", typ: "" },
        { json: "programColored", js: "programColored", typ: "" },
        { json: "dead", js: "dead", typ: "" },
        { json: "forageCrop", js: "forageCrop", typ: "" },
        { json: "chanceForExtraCrops", js: "chanceForExtraCrops", typ: "" },
        { json: "seedIndex", js: "seedIndex", typ: "" },
    ], false),
    "PurpleItems": o([
        { json: "Item", js: "Item", typ: a(r("ItemsItemClass")) },
    ], false),
    "ItemsItemClass": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: u(undefined, "") },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: u(undefined, r("IncubatingEgg")) },
        { json: "owner", js: "owner", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: u(undefined, "") },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: u(undefined, "") },
        { json: "isHoedirt", js: "isHoedirt", typ: u(undefined, "") },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: u(undefined, "") },
        { json: "questItem", js: "questItem", typ: u(undefined, "") },
        { json: "questId", js: "questId", typ: u(undefined, "") },
        { json: "isOn", js: "isOn", typ: u(undefined, "") },
        { json: "fragility", js: "fragility", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "edibility", js: "edibility", typ: u(undefined, "") },
        { json: "stack", js: "stack", typ: u(undefined, "") },
        { json: "quality", js: "quality", typ: u(undefined, "") },
        { json: "bigCraftable", js: "bigCraftable", typ: u(undefined, "") },
        { json: "setOutdoors", js: "setOutdoors", typ: u(undefined, "") },
        { json: "setIndoors", js: "setIndoors", typ: u(undefined, "") },
        { json: "readyForHarvest", js: "readyForHarvest", typ: u(undefined, "") },
        { json: "showNextIndex", js: "showNextIndex", typ: u(undefined, "") },
        { json: "flipped", js: "flipped", typ: u(undefined, "") },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: u(undefined, "") },
        { json: "isRecipe", js: "isRecipe", typ: u(undefined, "") },
        { json: "isLamp", js: "isLamp", typ: u(undefined, "") },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: u(undefined, "") },
        { json: "boundingBox", js: "boundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "scale", js: "scale", typ: u(undefined, r("IncubatingEgg")) },
        { json: "uses", js: "uses", typ: u(undefined, "") },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: u(undefined, "") },
        { json: "destroyOvernight", js: "destroyOvernight", typ: u(undefined, "") },
        { json: "initialParentTileIndex", js: "initialParentTileIndex", typ: u(undefined, "") },
        { json: "currentParentTileIndex", js: "currentParentTileIndex", typ: u(undefined, "") },
        { json: "indexOfMenuItemView", js: "indexOfMenuItemView", typ: u(undefined, "") },
        { json: "stackable", js: "stackable", typ: u(undefined, "") },
        { json: "instantUse", js: "instantUse", typ: u(undefined, "") },
        { json: "isEfficient", js: "isEfficient", typ: u(undefined, "") },
        { json: "animationSpeedModifier", js: "animationSpeedModifier", typ: u(undefined, "") },
        { json: "upgradeLevel", js: "upgradeLevel", typ: u(undefined, "") },
        { json: "numAttachmentSlots", js: "numAttachmentSlots", typ: u(undefined, "") },
        { json: "attachments", js: "attachments", typ: u(undefined, u(r("PurpleAttachments"), "")) },
        { json: "BaseName", js: "BaseName", typ: u(undefined, "") },
        { json: "InitialParentTileIndex", js: "InitialParentTileIndex", typ: u(undefined, "") },
        { json: "IndexOfMenuItemView", js: "IndexOfMenuItemView", typ: u(undefined, "") },
        { json: "InstantUse", js: "InstantUse", typ: u(undefined, "") },
        { json: "IsEfficient", js: "IsEfficient", typ: u(undefined, "") },
        { json: "AnimationSpeedModifier", js: "AnimationSpeedModifier", typ: u(undefined, "") },
        { json: "Stackable", js: "Stackable", typ: u(undefined, "") },
        { json: "minDamage", js: "minDamage", typ: u(undefined, "") },
        { json: "maxDamage", js: "maxDamage", typ: u(undefined, "") },
        { json: "speed", js: "speed", typ: u(undefined, "") },
        { json: "addedPrecision", js: "addedPrecision", typ: u(undefined, "") },
        { json: "addedDefense", js: "addedDefense", typ: u(undefined, "") },
        { json: "addedAreaOfEffect", js: "addedAreaOfEffect", typ: u(undefined, "") },
        { json: "knockback", js: "knockback", typ: u(undefined, "") },
        { json: "critChance", js: "critChance", typ: u(undefined, "") },
        { json: "critMultiplier", js: "critMultiplier", typ: u(undefined, "") },
        { json: "appearance", js: "appearance", typ: u(undefined, "") },
        { json: "isOnSpecial", js: "isOnSpecial", typ: u(undefined, "") },
        { json: "preserve", js: "preserve", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, r("Color")) },
        { json: "colorSameIndexAsParentSheetIndex", js: "colorSameIndexAsParentSheetIndex", typ: u(undefined, "") },
        { json: "ColorSameIndexAsParentSheetIndex", js: "ColorSameIndexAsParentSheetIndex", typ: u(undefined, "") },
        { json: "indexInTileSheet", js: "indexInTileSheet", typ: u(undefined, "") },
        { json: "indexInTileSheetFemale", js: "indexInTileSheetFemale", typ: u(undefined, "") },
        { json: "clothesType", js: "clothesType", typ: u(undefined, "") },
        { json: "dyeable", js: "dyeable", typ: u(undefined, "") },
        { json: "clothesColor", js: "clothesColor", typ: u(undefined, r("Color")) },
        { json: "otherData", js: "otherData", typ: u(undefined, "") },
        { json: "isPrismatic", js: "isPrismatic", typ: u(undefined, "") },
        { json: "Price", js: "Price", typ: u(undefined, "") },
        { json: "defenseBonus", js: "defenseBonus", typ: u(undefined, "") },
        { json: "immunityBonus", js: "immunityBonus", typ: u(undefined, "") },
        { json: "indexInColorSheet", js: "indexInColorSheet", typ: u(undefined, "") },
        { json: "appliedBootSheetIndex", js: "appliedBootSheetIndex", typ: u(undefined, "") },
        { json: "which", js: "which", typ: u(undefined, "") },
        { json: "skipHairDraw", js: "skipHairDraw", typ: u(undefined, "") },
        { json: "ignoreHairstyleOffset", js: "ignoreHairstyleOffset", typ: u(undefined, "") },
        { json: "hairDrawType", js: "hairDrawType", typ: u(undefined, "") },
        { json: "uniqueID", js: "uniqueID", typ: u(undefined, "") },
        { json: "furniture_type", js: "furniture_type", typ: u(undefined, "") },
        { json: "rotations", js: "rotations", typ: u(undefined, "") },
        { json: "currentRotation", js: "currentRotation", typ: u(undefined, "") },
        { json: "sourceRect", js: "sourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultSourceRect", js: "defaultSourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "defaultBoundingBox", js: "defaultBoundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "drawHeldObjectLow", js: "drawHeldObjectLow", typ: u(undefined, "") },
    ], false),
    "PurpleAttachments": o([
        { json: "Object", js: "Object", typ: u(a(""), "") },
    ], false),
    "FluffyItem": o([
        { json: "key", js: "key", typ: r("FluffyKey") },
        { json: "value", js: "value", typ: r("IndecentValue") },
    ], false),
    "IndecentValue": o([
        { json: "Object", js: "Object", typ: r("TentacledObject") },
    ], false),
    "TentacledObject": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "tileLocation", js: "tileLocation", typ: r("IncubatingEgg") },
        { json: "owner", js: "owner", typ: "" },
        { json: "type", js: "type", typ: r("PurpleType") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: "" },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: "" },
        { json: "isHoedirt", js: "isHoedirt", typ: "" },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: "" },
        { json: "questItem", js: "questItem", typ: "" },
        { json: "questId", js: "questId", typ: "" },
        { json: "isOn", js: "isOn", typ: "" },
        { json: "fragility", js: "fragility", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "edibility", js: "edibility", typ: "" },
        { json: "stack", js: "stack", typ: "" },
        { json: "quality", js: "quality", typ: "" },
        { json: "bigCraftable", js: "bigCraftable", typ: "" },
        { json: "setOutdoors", js: "setOutdoors", typ: "" },
        { json: "setIndoors", js: "setIndoors", typ: "" },
        { json: "readyForHarvest", js: "readyForHarvest", typ: "" },
        { json: "showNextIndex", js: "showNextIndex", typ: "" },
        { json: "flipped", js: "flipped", typ: "" },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: "" },
        { json: "isRecipe", js: "isRecipe", typ: "" },
        { json: "isLamp", js: "isLamp", typ: "" },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: "" },
        { json: "boundingBox", js: "boundingBox", typ: r("BoundingBox") },
        { json: "scale", js: "scale", typ: r("IncubatingEgg") },
        { json: "uses", js: "uses", typ: "" },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: "" },
        { json: "destroyOvernight", js: "destroyOvernight", typ: "" },
        { json: "currentLidFrame", js: "currentLidFrame", typ: u(undefined, "") },
        { json: "lidFrameCount", js: "lidFrameCount", typ: u(undefined, r("MaxEntries")) },
        { json: "frameCounter", js: "frameCounter", typ: u(undefined, "") },
        { json: "coins", js: "coins", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, r("ObjectItemsClass")) },
        { json: "separateWalletItems", js: "separateWalletItems", typ: u(undefined, r("SeparateWalletItems")) },
        { json: "chestType", js: "chestType", typ: u(undefined, "") },
        { json: "tint", js: "tint", typ: u(undefined, r("Color")) },
        { json: "playerChoiceColor", js: "playerChoiceColor", typ: u(undefined, r("Color")) },
        { json: "playerChest", js: "playerChest", typ: u(undefined, "") },
        { json: "fridge", js: "fridge", typ: u(undefined, "") },
        { json: "giftbox", js: "giftbox", typ: u(undefined, "") },
        { json: "giftboxIndex", js: "giftboxIndex", typ: u(undefined, "") },
        { json: "spriteIndexOverride", js: "spriteIndexOverride", typ: u(undefined, "") },
        { json: "dropContents", js: "dropContents", typ: u(undefined, "") },
        { json: "synchronized", js: "synchronized", typ: u(undefined, "") },
        { json: "specialChestType", js: "specialChestType", typ: u(undefined, r("SpecialChestType")) },
    ], false),
    "Umps": o([
        { json: "ResourceClump", js: "ResourceClump", typ: a(r("ResourceClump")) },
    ], false),
    "ResourceClump": o([
        { json: "width", js: "width", typ: "" },
        { json: "height", js: "height", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "health", js: "health", typ: "" },
        { json: "tile", js: "tile", typ: r("IncubatingEgg") },
    ], false),
    "SandDuggy": o([
        { json: "whacked", js: "whacked", typ: "" },
    ], false),
    "TerrainFeaturesClass": o([
        { json: "item", js: "item", typ: a(r("TerrainFeaturesItem")) },
    ], false),
    "TerrainFeaturesItem": o([
        { json: "key", js: "key", typ: r("FluffyKey") },
        { json: "value", js: "value", typ: r("HilariousValue") },
    ], false),
    "HilariousValue": o([
        { json: "TerrainFeature", js: "TerrainFeature", typ: r("TerrainFeature") },
    ], false),
    "TerrainFeature": o([
        { json: "texture", js: "texture", typ: u(undefined, "") },
        { json: "growthStage", js: "growthStage", typ: u(undefined, "") },
        { json: "treeType", js: "treeType", typ: u(undefined, "") },
        { json: "health", js: "health", typ: u(undefined, "") },
        { json: "flipped", js: "flipped", typ: u(undefined, "") },
        { json: "stump", js: "stump", typ: u(undefined, "") },
        { json: "tapped", js: "tapped", typ: u(undefined, "") },
        { json: "hasSeed", js: "hasSeed", typ: u(undefined, "") },
        { json: "fertilized", js: "fertilized", typ: u(undefined, "") },
        { json: "shakeLeft", js: "shakeLeft", typ: u(undefined, "") },
        { json: "treeTopSourceRect", js: "treeTopSourceRect", typ: u(undefined, r("BoundingBox")) },
        { json: "state", js: "state", typ: u(undefined, "") },
        { json: "fertilizer", js: "fertilizer", typ: u(undefined, "") },
        { json: "isGreenhouseDirt", js: "isGreenhouseDirt", typ: u(undefined, "") },
        { json: "whichFloor", js: "whichFloor", typ: u(undefined, "") },
        { json: "whichView", js: "whichView", typ: u(undefined, "") },
        { json: "isPathway", js: "isPathway", typ: u(undefined, "") },
        { json: "isSteppingStone", js: "isSteppingStone", typ: u(undefined, "") },
        { json: "drawContouredShadow", js: "drawContouredShadow", typ: u(undefined, "") },
        { json: "cornerDecoratedBorders", js: "cornerDecoratedBorders", typ: u(undefined, "") },
        { json: "indexOfFruit", js: "indexOfFruit", typ: u(undefined, "") },
        { json: "daysUntilMature", js: "daysUntilMature", typ: u(undefined, "") },
        { json: "fruitsOnTree", js: "fruitsOnTree", typ: u(undefined, "") },
        { json: "struckByLightningCountdown", js: "struckByLightningCountdown", typ: u(undefined, "") },
        { json: "greenHouseTree", js: "greenHouseTree", typ: u(undefined, "") },
        { json: "greenHouseTileTree", js: "greenHouseTileTree", typ: u(undefined, "") },
        { json: "fruitSeason", js: "fruitSeason", typ: u(undefined, r("CurrentSeason")) },
        { json: "crop", js: "crop", typ: u(undefined, r("TerrainFeatureCrop")) },
    ], false),
    "TerrainFeatureCrop": o([
        { json: "phaseDays", js: "phaseDays", typ: u(r("CropsOfTheWeek"), "") },
        { json: "rowInSpriteSheet", js: "rowInSpriteSheet", typ: "" },
        { json: "phaseToShow", js: "phaseToShow", typ: "" },
        { json: "currentPhase", js: "currentPhase", typ: "" },
        { json: "harvestMethod", js: "harvestMethod", typ: "" },
        { json: "indexOfHarvest", js: "indexOfHarvest", typ: "" },
        { json: "regrowAfterHarvest", js: "regrowAfterHarvest", typ: "" },
        { json: "dayOfCurrentPhase", js: "dayOfCurrentPhase", typ: "" },
        { json: "minHarvest", js: "minHarvest", typ: "" },
        { json: "maxHarvest", js: "maxHarvest", typ: "" },
        { json: "maxHarvestIncreasePerFarmingLevel", js: "maxHarvestIncreasePerFarmingLevel", typ: "" },
        { json: "daysOfUnclutteredGrowth", js: "daysOfUnclutteredGrowth", typ: "" },
        { json: "whichForageCrop", js: "whichForageCrop", typ: "" },
        { json: "seasonsToGrowIn", js: "seasonsToGrowIn", typ: u(r("SeasonsToGrowInClass"), "") },
        { json: "tintColor", js: "tintColor", typ: r("Color") },
        { json: "flip", js: "flip", typ: "" },
        { json: "fullGrown", js: "fullGrown", typ: "" },
        { json: "raisedSeeds", js: "raisedSeeds", typ: "" },
        { json: "programColored", js: "programColored", typ: "" },
        { json: "dead", js: "dead", typ: "" },
        { json: "forageCrop", js: "forageCrop", typ: "" },
        { json: "chanceForExtraCrops", js: "chanceForExtraCrops", typ: "" },
        { json: "seedIndex", js: "seedIndex", typ: "" },
    ], false),
    "SeasonsToGrowInClass": o([
        { json: "string", js: "string", typ: u(a(r("CurrentSeason")), r("CurrentSeason")) },
    ], false),
    "MinePermanentMineChanges": o([
        { json: "item", js: "item", typ: a(r("MinePermanentMineChangesItem")) },
    ], false),
    "MinePermanentMineChangesItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("AmbitiousValue") },
    ], false),
    "AmbitiousValue": o([
        { json: "MineInfo", js: "MineInfo", typ: r("MineInfo") },
    ], false),
    "MineInfo": o([
        { json: "platformContainersLeft", js: "platformContainersLeft", typ: "" },
        { json: "chestsLeft", js: "chestsLeft", typ: "" },
        { json: "coalCartsLeft", js: "coalCartsLeft", typ: "" },
        { json: "elevator", js: "elevator", typ: "" },
    ], false),
    "Options": o([
        { json: "autoRun", js: "autoRun", typ: "" },
        { json: "dialogueTyping", js: "dialogueTyping", typ: "" },
        { json: "showPortraits", js: "showPortraits", typ: "" },
        { json: "showMerchantPortraits", js: "showMerchantPortraits", typ: "" },
        { json: "showMenuBackground", js: "showMenuBackground", typ: "" },
        { json: "playFootstepSounds", js: "playFootstepSounds", typ: "" },
        { json: "alwaysShowToolHitLocation", js: "alwaysShowToolHitLocation", typ: "" },
        { json: "hideToolHitLocationWhenInMotion", js: "hideToolHitLocationWhenInMotion", typ: "" },
        { json: "pauseWhenOutOfFocus", js: "pauseWhenOutOfFocus", typ: "" },
        { json: "pinToolbarToggle", js: "pinToolbarToggle", typ: "" },
        { json: "mouseControls", js: "mouseControls", typ: "" },
        { json: "keyboardControls", js: "keyboardControls", typ: "" },
        { json: "gamepadControls", js: "gamepadControls", typ: "" },
        { json: "rumble", js: "rumble", typ: "" },
        { json: "ambientOnlyToggle", js: "ambientOnlyToggle", typ: "" },
        { json: "zoomButtons", js: "zoomButtons", typ: "" },
        { json: "invertScrollDirection", js: "invertScrollDirection", typ: "" },
        { json: "screenFlash", js: "screenFlash", typ: "" },
        { json: "showPlacementTileForGamepad", js: "showPlacementTileForGamepad", typ: "" },
        { json: "snappyMenus", js: "snappyMenus", typ: "" },
        { json: "showAdvancedCraftingInformation", js: "showAdvancedCraftingInformation", typ: "" },
        { json: "showMPEndOfNightReadyStatus", js: "showMPEndOfNightReadyStatus", typ: "" },
        { json: "muteAnimalSounds", js: "muteAnimalSounds", typ: "" },
        { json: "vsyncEnabled", js: "vsyncEnabled", typ: "" },
        { json: "fullscreen", js: "fullscreen", typ: "" },
        { json: "windowedBorderlessFullscreen", js: "windowedBorderlessFullscreen", typ: "" },
        { json: "ipConnectionsEnabled", js: "ipConnectionsEnabled", typ: "" },
        { json: "enableServer", js: "enableServer", typ: "" },
        { json: "enableFarmhandCreation", js: "enableFarmhandCreation", typ: "" },
        { json: "stowingMode", js: "stowingMode", typ: "" },
        { json: "gamepadMode", js: "gamepadMode", typ: "" },
        { json: "useLegacySlingshotFiring", js: "useLegacySlingshotFiring", typ: "" },
        { json: "musicVolumeLevel", js: "musicVolumeLevel", typ: "" },
        { json: "soundVolumeLevel", js: "soundVolumeLevel", typ: "" },
        { json: "footstepVolumeLevel", js: "footstepVolumeLevel", typ: "" },
        { json: "ambientVolumeLevel", js: "ambientVolumeLevel", typ: "" },
        { json: "snowTransparency", js: "snowTransparency", typ: "" },
        { json: "zoomLevel", js: "zoomLevel", typ: "" },
        { json: "localCoopBaseZoomLevel", js: "localCoopBaseZoomLevel", typ: "" },
        { json: "uiScale", js: "uiScale", typ: "" },
        { json: "localCoopDesiredUIScale", js: "localCoopDesiredUIScale", typ: "" },
        { json: "preferredResolutionX", js: "preferredResolutionX", typ: "" },
        { json: "preferredResolutionY", js: "preferredResolutionY", typ: "" },
        { json: "lightingQuality", js: "lightingQuality", typ: "" },
        { json: "serverPrivacy", js: "serverPrivacy", typ: "" },
        { json: "actionButton", js: "actionButton", typ: r("Button") },
        { json: "cancelButton", js: "cancelButton", typ: r("CancelButton") },
        { json: "useToolButton", js: "useToolButton", typ: r("Button") },
        { json: "moveUpButton", js: "moveUpButton", typ: r("CancelButton") },
        { json: "moveRightButton", js: "moveRightButton", typ: r("CancelButton") },
        { json: "moveDownButton", js: "moveDownButton", typ: r("CancelButton") },
        { json: "moveLeftButton", js: "moveLeftButton", typ: r("CancelButton") },
        { json: "menuButton", js: "menuButton", typ: r("Button") },
        { json: "runButton", js: "runButton", typ: r("CancelButton") },
        { json: "tmpKeyToReplace", js: "tmpKeyToReplace", typ: r("CancelButton") },
        { json: "chatButton", js: "chatButton", typ: r("Button") },
        { json: "mapButton", js: "mapButton", typ: r("CancelButton") },
        { json: "journalButton", js: "journalButton", typ: r("CancelButton") },
        { json: "inventorySlot1", js: "inventorySlot1", typ: r("CancelButton") },
        { json: "inventorySlot2", js: "inventorySlot2", typ: r("CancelButton") },
        { json: "inventorySlot3", js: "inventorySlot3", typ: r("CancelButton") },
        { json: "inventorySlot4", js: "inventorySlot4", typ: r("CancelButton") },
        { json: "inventorySlot5", js: "inventorySlot5", typ: r("CancelButton") },
        { json: "inventorySlot6", js: "inventorySlot6", typ: r("CancelButton") },
        { json: "inventorySlot7", js: "inventorySlot7", typ: r("CancelButton") },
        { json: "inventorySlot8", js: "inventorySlot8", typ: r("CancelButton") },
        { json: "inventorySlot9", js: "inventorySlot9", typ: r("CancelButton") },
        { json: "inventorySlot10", js: "inventorySlot10", typ: r("CancelButton") },
        { json: "inventorySlot11", js: "inventorySlot11", typ: r("CancelButton") },
        { json: "inventorySlot12", js: "inventorySlot12", typ: r("CancelButton") },
        { json: "toolbarSwap", js: "toolbarSwap", typ: r("CancelButton") },
        { json: "emoteButton", js: "emoteButton", typ: r("CancelButton") },
        { json: "hardwareCursor", js: "hardwareCursor", typ: "" },
    ], false),
    "Button": o([
        { json: "InputButton", js: "InputButton", typ: a(r("InputButton")) },
    ], false),
    "InputButton": o([
        { json: "key", js: "key", typ: "" },
        { json: "mouseLeft", js: "mouseLeft", typ: "" },
        { json: "mouseRight", js: "mouseRight", typ: "" },
    ], false),
    "CancelButton": o([
        { json: "InputButton", js: "InputButton", typ: r("InputButton") },
    ], false),
    "Player": o([
        { json: "name", js: "name", typ: "" },
        { json: "forceOneTileWide", js: "forceOneTileWide", typ: "" },
        { json: "isEmoting", js: "isEmoting", typ: "" },
        { json: "isCharging", js: "isCharging", typ: "" },
        { json: "isGlowing", js: "isGlowing", typ: "" },
        { json: "coloredBorder", js: "coloredBorder", typ: "" },
        { json: "flip", js: "flip", typ: "" },
        { json: "drawOnTop", js: "drawOnTop", typ: "" },
        { json: "faceTowardFarmer", js: "faceTowardFarmer", typ: "" },
        { json: "ignoreMovementAnimation", js: "ignoreMovementAnimation", typ: "" },
        { json: "faceAwayFromFarmer", js: "faceAwayFromFarmer", typ: "" },
        { json: "scale", js: "scale", typ: r("Scale") },
        { json: "timeBeforeAIMovementAgain", js: "timeBeforeAIMovementAgain", typ: "" },
        { json: "glowingTransparency", js: "glowingTransparency", typ: "" },
        { json: "glowRate", js: "glowRate", typ: "" },
        { json: "willDestroyObjectsUnderfoot", js: "willDestroyObjectsUnderfoot", typ: "" },
        { json: "Position", js: "Position", typ: r("IncubatingEgg") },
        { json: "Speed", js: "Speed", typ: "" },
        { json: "FacingDirection", js: "FacingDirection", typ: "" },
        { json: "IsEmoting", js: "IsEmoting", typ: "" },
        { json: "CurrentEmote", js: "CurrentEmote", typ: "" },
        { json: "Scale", js: "Scale", typ: "" },
        { json: "questLog", js: "questLog", typ: r("QuestLog") },
        { json: "professions", js: "professions", typ: r("CropsOfTheWeek") },
        { json: "newLevels", js: "newLevels", typ: "" },
        { json: "experiencePoints", js: "experiencePoints", typ: r("CropsOfTheWeek") },
        { json: "items", js: "items", typ: r("FluffyItems") },
        { json: "dialogueQuestionsAnswered", js: "dialogueQuestionsAnswered", typ: r("CropsOfTheWeek") },
        { json: "furnitureOwned", js: "furnitureOwned", typ: "" },
        { json: "cookingRecipes", js: "cookingRecipes", typ: r("LimitedNutDrops") },
        { json: "craftingRecipes", js: "craftingRecipes", typ: r("LimitedNutDrops") },
        { json: "activeDialogueEvents", js: "activeDialogueEvents", typ: "" },
        { json: "eventsSeen", js: "eventsSeen", typ: r("CropsOfTheWeek") },
        { json: "secretNotesSeen", js: "secretNotesSeen", typ: r("CropsOfTheWeek") },
        { json: "songsHeard", js: "songsHeard", typ: r("BroadcastedMail") },
        { json: "achievements", js: "achievements", typ: r("CropsOfTheWeek") },
        { json: "specialItems", js: "specialItems", typ: r("CropsOfTheWeek") },
        { json: "specialBigCraftables", js: "specialBigCraftables", typ: r("CropsOfTheWeek") },
        { json: "mailReceived", js: "mailReceived", typ: r("BroadcastedMail") },
        { json: "mailForTomorrow", js: "mailForTomorrow", typ: "" },
        { json: "mailbox", js: "mailbox", typ: r("Mailbox") },
        { json: "timeWentToBed", js: "timeWentToBed", typ: r("MaxEntries") },
        { json: "sleptInTemporaryBed", js: "sleptInTemporaryBed", typ: r("SleptInTemporaryBed") },
        { json: "stats", js: "stats", typ: r("Stats") },
        { json: "blueprints", js: "blueprints", typ: "" },
        { json: "biteChime", js: "biteChime", typ: "" },
        { json: "itemsLostLastDeath", js: "itemsLostLastDeath", typ: r("ItemsLostLastDeathClass") },
        { json: "movementDirections", js: "movementDirections", typ: "" },
        { json: "farmName", js: "farmName", typ: "" },
        { json: "favoriteThing", js: "favoriteThing", typ: "" },
        { json: "slotCanHost", js: "slotCanHost", typ: "" },
        { json: "userID", js: "userID", typ: "" },
        { json: "catPerson", js: "catPerson", typ: "" },
        { json: "whichPetBreed", js: "whichPetBreed", typ: "" },
        { json: "acceptedDailyQuest", js: "acceptedDailyQuest", typ: "" },
        { json: "mostRecentBed", js: "mostRecentBed", typ: r("IncubatingEgg") },
        { json: "emoteFavorites", js: "emoteFavorites", typ: a("") },
        { json: "performedEmotes", js: "performedEmotes", typ: "" },
        { json: "shirt", js: "shirt", typ: "" },
        { json: "hair", js: "hair", typ: "" },
        { json: "skin", js: "skin", typ: "" },
        { json: "shoes", js: "shoes", typ: "" },
        { json: "accessory", js: "accessory", typ: "" },
        { json: "facialHair", js: "facialHair", typ: "" },
        { json: "pants", js: "pants", typ: "" },
        { json: "hairstyleColor", js: "hairstyleColor", typ: r("Color") },
        { json: "pantsColor", js: "pantsColor", typ: r("Color") },
        { json: "newEyeColor", js: "newEyeColor", typ: r("Color") },
        { json: "hat", js: "hat", typ: r("Hat") },
        { json: "boots", js: "boots", typ: r("Boots") },
        { json: "leftRing", js: "leftRing", typ: r("TRing") },
        { json: "rightRing", js: "rightRing", typ: r("TRing") },
        { json: "shirtItem", js: "shirtItem", typ: r("Item") },
        { json: "pantsItem", js: "pantsItem", typ: r("Item") },
        { json: "divorceTonight", js: "divorceTonight", typ: "" },
        { json: "changeWalletTypeTonight", js: "changeWalletTypeTonight", typ: "" },
        { json: "woodPieces", js: "woodPieces", typ: "" },
        { json: "stonePieces", js: "stonePieces", typ: "" },
        { json: "copperPieces", js: "copperPieces", typ: "" },
        { json: "ironPieces", js: "ironPieces", typ: "" },
        { json: "coalPieces", js: "coalPieces", typ: "" },
        { json: "goldPieces", js: "goldPieces", typ: "" },
        { json: "iridiumPieces", js: "iridiumPieces", typ: "" },
        { json: "quartzPieces", js: "quartzPieces", typ: "" },
        { json: "gameVersion", js: "gameVersion", typ: "" },
        { json: "gameVersionLabel", js: "gameVersionLabel", typ: "" },
        { json: "caveChoice", js: "caveChoice", typ: "" },
        { json: "feed", js: "feed", typ: "" },
        { json: "farmingLevel", js: "farmingLevel", typ: "" },
        { json: "miningLevel", js: "miningLevel", typ: "" },
        { json: "combatLevel", js: "combatLevel", typ: "" },
        { json: "foragingLevel", js: "foragingLevel", typ: "" },
        { json: "fishingLevel", js: "fishingLevel", typ: "" },
        { json: "luckLevel", js: "luckLevel", typ: "" },
        { json: "newSkillPointsToSpend", js: "newSkillPointsToSpend", typ: "" },
        { json: "addedFarmingLevel", js: "addedFarmingLevel", typ: "" },
        { json: "addedMiningLevel", js: "addedMiningLevel", typ: "" },
        { json: "addedCombatLevel", js: "addedCombatLevel", typ: "" },
        { json: "addedForagingLevel", js: "addedForagingLevel", typ: "" },
        { json: "addedFishingLevel", js: "addedFishingLevel", typ: "" },
        { json: "addedLuckLevel", js: "addedLuckLevel", typ: "" },
        { json: "maxStamina", js: "maxStamina", typ: "" },
        { json: "maxItems", js: "maxItems", typ: "" },
        { json: "lastSeenMovieWeek", js: "lastSeenMovieWeek", typ: "" },
        { json: "resilience", js: "resilience", typ: "" },
        { json: "attack", js: "attack", typ: "" },
        { json: "immunity", js: "immunity", typ: "" },
        { json: "attackIncreaseModifier", js: "attackIncreaseModifier", typ: "" },
        { json: "knockbackModifier", js: "knockbackModifier", typ: "" },
        { json: "weaponSpeedModifier", js: "weaponSpeedModifier", typ: "" },
        { json: "critChanceModifier", js: "critChanceModifier", typ: "" },
        { json: "critPowerModifier", js: "critPowerModifier", typ: "" },
        { json: "weaponPrecisionModifier", js: "weaponPrecisionModifier", typ: "" },
        { json: "clubCoins", js: "clubCoins", typ: "" },
        { json: "trashCanLevel", js: "trashCanLevel", typ: "" },
        { json: "daysLeftForToolUpgrade", js: "daysLeftForToolUpgrade", typ: "" },
        { json: "houseUpgradeLevel", js: "houseUpgradeLevel", typ: "" },
        { json: "daysUntilHouseUpgrade", js: "daysUntilHouseUpgrade", typ: "" },
        { json: "coopUpgradeLevel", js: "coopUpgradeLevel", typ: "" },
        { json: "barnUpgradeLevel", js: "barnUpgradeLevel", typ: "" },
        { json: "hasGreenhouse", js: "hasGreenhouse", typ: "" },
        { json: "hasUnlockedSkullDoor", js: "hasUnlockedSkullDoor", typ: "" },
        { json: "hasDarkTalisman", js: "hasDarkTalisman", typ: "" },
        { json: "hasMagicInk", js: "hasMagicInk", typ: "" },
        { json: "showChestColorPicker", js: "showChestColorPicker", typ: "" },
        { json: "hasMagnifyingGlass", js: "hasMagnifyingGlass", typ: "" },
        { json: "hasWateringCanEnchantment", js: "hasWateringCanEnchantment", typ: "" },
        { json: "magneticRadius", js: "magneticRadius", typ: "" },
        { json: "temporaryInvincibilityTimer", js: "temporaryInvincibilityTimer", typ: "" },
        { json: "currentTemporaryInvincibilityDuration", js: "currentTemporaryInvincibilityDuration", typ: "" },
        { json: "health", js: "health", typ: "" },
        { json: "maxHealth", js: "maxHealth", typ: "" },
        { json: "difficultyModifier", js: "difficultyModifier", typ: "" },
        { json: "isMale", js: "isMale", typ: "" },
        { json: "hasBusTicket", js: "hasBusTicket", typ: "" },
        { json: "stardewHero", js: "stardewHero", typ: "" },
        { json: "hasClubCard", js: "hasClubCard", typ: "" },
        { json: "hasSpecialCharm", js: "hasSpecialCharm", typ: "" },
        { json: "basicShipped", js: "basicShipped", typ: r("BasicShipped") },
        { json: "mineralsFound", js: "mineralsFound", typ: r("BasicShipped") },
        { json: "recipesCooked", js: "recipesCooked", typ: r("BasicShipped") },
        { json: "fishCaught", js: "fishCaught", typ: r("ArchaeologyFound") },
        { json: "archaeologyFound", js: "archaeologyFound", typ: r("ArchaeologyFound") },
        { json: "callsReceived", js: "callsReceived", typ: "" },
        { json: "giftedItems", js: "giftedItems", typ: r("GiftedItems") },
        { json: "tailoredItems", js: "tailoredItems", typ: r("LimitedNutDrops") },
        { json: "friendshipData", js: "friendshipData", typ: r("FriendshipData") },
        { json: "dayOfMonthForSaveGame", js: "dayOfMonthForSaveGame", typ: "" },
        { json: "seasonForSaveGame", js: "seasonForSaveGame", typ: "" },
        { json: "yearForSaveGame", js: "yearForSaveGame", typ: "" },
        { json: "overallsColor", js: "overallsColor", typ: "" },
        { json: "shirtColor", js: "shirtColor", typ: "" },
        { json: "skinColor", js: "skinColor", typ: "" },
        { json: "hairColor", js: "hairColor", typ: "" },
        { json: "eyeColor", js: "eyeColor", typ: "" },
        { json: "bobber", js: "bobber", typ: "" },
        { json: "qiGems", js: "qiGems", typ: "" },
        { json: "JOTPKProgress", js: "JOTPKProgress", typ: r("JOTPKProgress") },
        { json: "hasUsedDailyRevive", js: "hasUsedDailyRevive", typ: "" },
        { json: "chestConsumedLevels", js: "chestConsumedLevels", typ: r("ChestConsumedLevels") },
        { json: "saveTime", js: "saveTime", typ: "" },
        { json: "isCustomized", js: "isCustomized", typ: "" },
        { json: "homeLocation", js: "homeLocation", typ: "" },
        { json: "lastSleepLocation", js: "lastSleepLocation", typ: "" },
        { json: "lastSleepPoint", js: "lastSleepPoint", typ: r("IncubatingEgg") },
        { json: "daysMarried", js: "daysMarried", typ: "" },
        { json: "movementMultiplier", js: "movementMultiplier", typ: "" },
        { json: "theaterBuildDate", js: "theaterBuildDate", typ: "" },
        { json: "deepestMineLevel", js: "deepestMineLevel", typ: "" },
        { json: "stamina", js: "stamina", typ: "" },
        { json: "totalMoneyEarned", js: "totalMoneyEarned", typ: "" },
        { json: "millisecondsPlayed", js: "millisecondsPlayed", typ: "" },
        { json: "hasRustyKey", js: "hasRustyKey", typ: "" },
        { json: "hasSkullKey", js: "hasSkullKey", typ: "" },
        { json: "canUnderstandDwarves", js: "canUnderstandDwarves", typ: "" },
        { json: "HasTownKey", js: "HasTownKey", typ: "" },
        { json: "useSeparateWallets", js: "useSeparateWallets", typ: "" },
        { json: "timesReachedMineBottom", js: "timesReachedMineBottom", typ: "" },
        { json: "UniqueMultiplayerID", js: "UniqueMultiplayerID", typ: "" },
        { json: "money", js: "money", typ: "" },
    ], false),
    "JOTPKProgress": o([
        { json: "bulletDamage", js: "bulletDamage", typ: r("MaxEntries") },
        { json: "fireSpeedLevel", js: "fireSpeedLevel", typ: r("MaxEntries") },
        { json: "ammoLevel", js: "ammoLevel", typ: r("MaxEntries") },
        { json: "spreadPistol", js: "spreadPistol", typ: r("SleptInTemporaryBed") },
        { json: "runSpeedLevel", js: "runSpeedLevel", typ: r("MaxEntries") },
        { json: "lives", js: "lives", typ: r("MaxEntries") },
        { json: "coins", js: "coins", typ: r("MaxEntries") },
        { json: "score", js: "score", typ: r("MaxEntries") },
        { json: "died", js: "died", typ: r("SleptInTemporaryBed") },
        { json: "whichRound", js: "whichRound", typ: r("MaxEntries") },
        { json: "whichWave", js: "whichWave", typ: r("MaxEntries") },
        { json: "heldItem", js: "heldItem", typ: r("MaxEntries") },
        { json: "world", js: "world", typ: r("MaxEntries") },
        { json: "waveTimer", js: "waveTimer", typ: r("MaxEntries") },
        { json: "monsterChances", js: "monsterChances", typ: r("MonsterChances") },
    ], false),
    "MonsterChances": o([
        { json: "Vector2", js: "Vector2", typ: a(r("IncubatingEgg")) },
    ], false),
    "ArchaeologyFound": o([
        { json: "item", js: "item", typ: a(r("ArchaeologyFoundItem")) },
    ], false),
    "ArchaeologyFoundItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("CunningValue") },
    ], false),
    "CunningValue": o([
        { json: "ArrayOfInt", js: "ArrayOfInt", typ: r("CropsOfTheWeek") },
    ], false),
    "BasicShipped": o([
        { json: "item", js: "item", typ: a(r("BasicShippedItem")) },
    ], false),
    "BasicShippedItem": o([
        { json: "key", js: "key", typ: r("MaxEntries") },
        { json: "value", js: "value", typ: r("MaxEntries") },
    ], false),
    "Boots": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "defenseBonus", js: "defenseBonus", typ: "" },
        { json: "immunityBonus", js: "immunityBonus", typ: "" },
        { json: "indexInTileSheet", js: "indexInTileSheet", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "indexInColorSheet", js: "indexInColorSheet", typ: "" },
        { json: "appliedBootSheetIndex", js: "appliedBootSheetIndex", typ: "" },
    ], false),
    "FriendshipData": o([
        { json: "item", js: "item", typ: a(r("FriendshipDataItem")) },
    ], false),
    "FriendshipDataItem": o([
        { json: "key", js: "key", typ: r("Mailbox") },
        { json: "value", js: "value", typ: r("MagentaValue") },
    ], false),
    "MagentaValue": o([
        { json: "Friendship", js: "Friendship", typ: r("Friendship") },
    ], false),
    "Friendship": o([
        { json: "Points", js: "Points", typ: "" },
        { json: "GiftsThisWeek", js: "GiftsThisWeek", typ: "" },
        { json: "GiftsToday", js: "GiftsToday", typ: "" },
        { json: "LastGiftDate", js: "LastGiftDate", typ: u(undefined, r("LastGiftDate")) },
        { json: "TalkedToToday", js: "TalkedToToday", typ: "" },
        { json: "ProposalRejected", js: "ProposalRejected", typ: "" },
        { json: "Status", js: "Status", typ: r("Status") },
        { json: "Proposer", js: "Proposer", typ: "" },
        { json: "RoommateMarriage", js: "RoommateMarriage", typ: "" },
    ], false),
    "LastGiftDate": o([
        { json: "Year", js: "Year", typ: "" },
        { json: "DayOfMonth", js: "DayOfMonth", typ: "" },
        { json: "Season", js: "Season", typ: r("CurrentSeason") },
        { json: "TotalDays", js: "TotalDays", typ: "" },
    ], false),
    "GiftedItems": o([
        { json: "item", js: "item", typ: a(r("GiftedItemsItem")) },
    ], false),
    "GiftedItemsItem": o([
        { json: "key", js: "key", typ: r("Mailbox") },
        { json: "value", js: "value", typ: r("FriskyValue") },
    ], false),
    "FriskyValue": o([
        { json: "dictionary", js: "dictionary", typ: r("BasicShipped") },
    ], false),
    "Hat": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "which", js: "which", typ: "" },
        { json: "skipHairDraw", js: "skipHairDraw", typ: "" },
        { json: "ignoreHairstyleOffset", js: "ignoreHairstyleOffset", typ: "" },
        { json: "hairDrawType", js: "hairDrawType", typ: "" },
        { json: "isPrismatic", js: "isPrismatic", typ: "" },
    ], false),
    "FluffyItems": o([
        { json: "Item", js: "Item", typ: a(u(r("TentacledItem"), "")) },
    ], false),
    "TentacledItem": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "initialParentTileIndex", js: "initialParentTileIndex", typ: u(undefined, "") },
        { json: "currentParentTileIndex", js: "currentParentTileIndex", typ: u(undefined, "") },
        { json: "indexOfMenuItemView", js: "indexOfMenuItemView", typ: u(undefined, "") },
        { json: "stackable", js: "stackable", typ: u(undefined, "") },
        { json: "instantUse", js: "instantUse", typ: u(undefined, "") },
        { json: "isEfficient", js: "isEfficient", typ: u(undefined, "") },
        { json: "animationSpeedModifier", js: "animationSpeedModifier", typ: u(undefined, "") },
        { json: "upgradeLevel", js: "upgradeLevel", typ: u(undefined, "") },
        { json: "numAttachmentSlots", js: "numAttachmentSlots", typ: u(undefined, "") },
        { json: "attachments", js: "attachments", typ: u(undefined, u(r("FluffyAttachments"), "")) },
        { json: "BaseName", js: "BaseName", typ: u(undefined, "") },
        { json: "InitialParentTileIndex", js: "InitialParentTileIndex", typ: u(undefined, "") },
        { json: "IndexOfMenuItemView", js: "IndexOfMenuItemView", typ: u(undefined, "") },
        { json: "InstantUse", js: "InstantUse", typ: u(undefined, "") },
        { json: "IsEfficient", js: "IsEfficient", typ: u(undefined, "") },
        { json: "AnimationSpeedModifier", js: "AnimationSpeedModifier", typ: u(undefined, "") },
        { json: "Stackable", js: "Stackable", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "minDamage", js: "minDamage", typ: u(undefined, "") },
        { json: "maxDamage", js: "maxDamage", typ: u(undefined, "") },
        { json: "speed", js: "speed", typ: u(undefined, "") },
        { json: "addedPrecision", js: "addedPrecision", typ: u(undefined, "") },
        { json: "addedDefense", js: "addedDefense", typ: u(undefined, "") },
        { json: "addedAreaOfEffect", js: "addedAreaOfEffect", typ: u(undefined, "") },
        { json: "knockback", js: "knockback", typ: u(undefined, "") },
        { json: "critChance", js: "critChance", typ: u(undefined, "") },
        { json: "critMultiplier", js: "critMultiplier", typ: u(undefined, "") },
        { json: "appearance", js: "appearance", typ: u(undefined, "") },
        { json: "isOnSpecial", js: "isOnSpecial", typ: u(undefined, "") },
        { json: "additionalPower", js: "additionalPower", typ: u(undefined, r("MaxEntries")) },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: u(undefined, "") },
        { json: "tileLocation", js: "tileLocation", typ: u(undefined, r("IncubatingEgg")) },
        { json: "owner", js: "owner", typ: u(undefined, "") },
        { json: "canBeSetDown", js: "canBeSetDown", typ: u(undefined, "") },
        { json: "canBeGrabbed", js: "canBeGrabbed", typ: u(undefined, "") },
        { json: "isHoedirt", js: "isHoedirt", typ: u(undefined, "") },
        { json: "isSpawnedObject", js: "isSpawnedObject", typ: u(undefined, "") },
        { json: "questItem", js: "questItem", typ: u(undefined, "") },
        { json: "questId", js: "questId", typ: u(undefined, "") },
        { json: "isOn", js: "isOn", typ: u(undefined, "") },
        { json: "fragility", js: "fragility", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "edibility", js: "edibility", typ: u(undefined, "") },
        { json: "stack", js: "stack", typ: u(undefined, "") },
        { json: "quality", js: "quality", typ: u(undefined, "") },
        { json: "bigCraftable", js: "bigCraftable", typ: u(undefined, "") },
        { json: "setOutdoors", js: "setOutdoors", typ: u(undefined, "") },
        { json: "setIndoors", js: "setIndoors", typ: u(undefined, "") },
        { json: "readyForHarvest", js: "readyForHarvest", typ: u(undefined, "") },
        { json: "showNextIndex", js: "showNextIndex", typ: u(undefined, "") },
        { json: "flipped", js: "flipped", typ: u(undefined, "") },
        { json: "hasBeenPickedUpByFarmer", js: "hasBeenPickedUpByFarmer", typ: u(undefined, "") },
        { json: "isRecipe", js: "isRecipe", typ: u(undefined, "") },
        { json: "isLamp", js: "isLamp", typ: u(undefined, "") },
        { json: "minutesUntilReady", js: "minutesUntilReady", typ: u(undefined, "") },
        { json: "boundingBox", js: "boundingBox", typ: u(undefined, r("BoundingBox")) },
        { json: "scale", js: "scale", typ: u(undefined, r("IncubatingEgg")) },
        { json: "uses", js: "uses", typ: u(undefined, "") },
        { json: "preservedParentSheetIndex", js: "preservedParentSheetIndex", typ: u(undefined, "") },
        { json: "destroyOvernight", js: "destroyOvernight", typ: u(undefined, "") },
        { json: "isBottomless", js: "isBottomless", typ: u(undefined, "") },
        { json: "waterCanMax", js: "waterCanMax", typ: u(undefined, "") },
        { json: "WaterLeft", js: "WaterLeft", typ: u(undefined, "") },
        { json: "IsBottomless", js: "IsBottomless", typ: u(undefined, "") },
    ], false),
    "FluffyAttachments": o([
        { json: "Object", js: "Object", typ: a(u(r("DishOfTheDay"), "")) },
    ], false),
    "TRing": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "indexInTileSheet", js: "indexInTileSheet", typ: "" },
        { json: "uniqueID", js: "uniqueID", typ: "" },
    ], false),
    "Item": o([
        { json: "isLostItem", js: "isLostItem", typ: "" },
        { json: "category", js: "category", typ: "" },
        { json: "hasBeenInInventory", js: "hasBeenInInventory", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "parentSheetIndex", js: "parentSheetIndex", typ: "" },
        { json: "specialItem", js: "specialItem", typ: "" },
        { json: "SpecialVariable", js: "SpecialVariable", typ: "" },
        { json: "DisplayName", js: "DisplayName", typ: "" },
        { json: "Name", js: "Name", typ: "" },
        { json: "Stack", js: "Stack", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "indexInTileSheet", js: "indexInTileSheet", typ: "" },
        { json: "indexInTileSheetFemale", js: "indexInTileSheetFemale", typ: "" },
        { json: "clothesType", js: "clothesType", typ: "" },
        { json: "dyeable", js: "dyeable", typ: "" },
        { json: "clothesColor", js: "clothesColor", typ: r("Color") },
        { json: "otherData", js: "otherData", typ: "" },
        { json: "isPrismatic", js: "isPrismatic", typ: "" },
        { json: "Price", js: "Price", typ: "" },
    ], false),
    "QuestLog": o([
        { json: "Quest", js: "Quest", typ: a(r("Quest")) },
    ], false),
    "Quest": o([
        { json: "_currentObjective", js: "_currentObjective", typ: "" },
        { json: "_questDescription", js: "_questDescription", typ: "" },
        { json: "_questTitle", js: "_questTitle", typ: "" },
        { json: "rewardDescription", js: "rewardDescription", typ: "" },
        { json: "accepted", js: "accepted", typ: "" },
        { json: "completed", js: "completed", typ: "" },
        { json: "dailyQuest", js: "dailyQuest", typ: "" },
        { json: "showNew", js: "showNew", typ: "" },
        { json: "canBeCancelled", js: "canBeCancelled", typ: "" },
        { json: "destroy", js: "destroy", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "moneyReward", js: "moneyReward", typ: "" },
        { json: "questType", js: "questType", typ: "" },
        { json: "daysLeft", js: "daysLeft", typ: "" },
        { json: "dayQuestAccepted", js: "dayQuestAccepted", typ: "" },
        { json: "nextQuests", js: "nextQuests", typ: r("MaxEntries") },
        { json: "questTitle", js: "questTitle", typ: "" },
        { json: "targetMessage", js: "targetMessage", typ: u(undefined, "") },
        { json: "target", js: "target", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
        { json: "number", js: "number", typ: u(undefined, "") },
        { json: "parts", js: "parts", typ: u(undefined, "") },
        { json: "dialogueparts", js: "dialogueparts", typ: u(undefined, "") },
    ], false),
    "Stats": o([
        { json: "seedsSown", js: "seedsSown", typ: "" },
        { json: "itemsShipped", js: "itemsShipped", typ: "" },
        { json: "itemsCooked", js: "itemsCooked", typ: "" },
        { json: "itemsCrafted", js: "itemsCrafted", typ: "" },
        { json: "chickenEggsLayed", js: "chickenEggsLayed", typ: "" },
        { json: "duckEggsLayed", js: "duckEggsLayed", typ: "" },
        { json: "cowMilkProduced", js: "cowMilkProduced", typ: "" },
        { json: "goatMilkProduced", js: "goatMilkProduced", typ: "" },
        { json: "rabbitWoolProduced", js: "rabbitWoolProduced", typ: "" },
        { json: "sheepWoolProduced", js: "sheepWoolProduced", typ: "" },
        { json: "cheeseMade", js: "cheeseMade", typ: "" },
        { json: "goatCheeseMade", js: "goatCheeseMade", typ: "" },
        { json: "trufflesFound", js: "trufflesFound", typ: "" },
        { json: "stoneGathered", js: "stoneGathered", typ: "" },
        { json: "rocksCrushed", js: "rocksCrushed", typ: "" },
        { json: "dirtHoed", js: "dirtHoed", typ: "" },
        { json: "giftsGiven", js: "giftsGiven", typ: "" },
        { json: "timesUnconscious", js: "timesUnconscious", typ: "" },
        { json: "averageBedtime", js: "averageBedtime", typ: "" },
        { json: "timesFished", js: "timesFished", typ: "" },
        { json: "fishCaught", js: "fishCaught", typ: "" },
        { json: "bouldersCracked", js: "bouldersCracked", typ: "" },
        { json: "stumpsChopped", js: "stumpsChopped", typ: "" },
        { json: "stepsTaken", js: "stepsTaken", typ: "" },
        { json: "monstersKilled", js: "monstersKilled", typ: "" },
        { json: "diamondsFound", js: "diamondsFound", typ: "" },
        { json: "prismaticShardsFound", js: "prismaticShardsFound", typ: "" },
        { json: "otherPreciousGemsFound", js: "otherPreciousGemsFound", typ: "" },
        { json: "caveCarrotsFound", js: "caveCarrotsFound", typ: "" },
        { json: "copperFound", js: "copperFound", typ: "" },
        { json: "ironFound", js: "ironFound", typ: "" },
        { json: "coalFound", js: "coalFound", typ: "" },
        { json: "coinsFound", js: "coinsFound", typ: "" },
        { json: "goldFound", js: "goldFound", typ: "" },
        { json: "iridiumFound", js: "iridiumFound", typ: "" },
        { json: "barsSmelted", js: "barsSmelted", typ: "" },
        { json: "beveragesMade", js: "beveragesMade", typ: "" },
        { json: "preservesMade", js: "preservesMade", typ: "" },
        { json: "piecesOfTrashRecycled", js: "piecesOfTrashRecycled", typ: "" },
        { json: "mysticStonesCrushed", js: "mysticStonesCrushed", typ: "" },
        { json: "daysPlayed", js: "daysPlayed", typ: "" },
        { json: "weedsEliminated", js: "weedsEliminated", typ: "" },
        { json: "sticksChopped", js: "sticksChopped", typ: "" },
        { json: "notesFound", js: "notesFound", typ: "" },
        { json: "questsCompleted", js: "questsCompleted", typ: "" },
        { json: "starLevelCropsShipped", js: "starLevelCropsShipped", typ: "" },
        { json: "cropsShipped", js: "cropsShipped", typ: "" },
        { json: "itemsForaged", js: "itemsForaged", typ: "" },
        { json: "slimesKilled", js: "slimesKilled", typ: "" },
        { json: "geodesCracked", js: "geodesCracked", typ: "" },
        { json: "goodFriends", js: "goodFriends", typ: "" },
        { json: "totalMoneyGifted", js: "totalMoneyGifted", typ: "" },
        { json: "individualMoneyEarned", js: "individualMoneyEarned", typ: "" },
        { json: "specificMonstersKilled", js: "specificMonstersKilled", typ: r("LimitedNutDrops") },
        { json: "stat_dictionary", js: "stat_dictionary", typ: r("StatDictionary") },
        { json: "GoodFriends", js: "GoodFriends", typ: "" },
        { json: "CropsShipped", js: "CropsShipped", typ: "" },
        { json: "ItemsForaged", js: "ItemsForaged", typ: "" },
        { json: "GeodesCracked", js: "GeodesCracked", typ: "" },
        { json: "SlimesKilled", js: "SlimesKilled", typ: "" },
        { json: "StarLevelCropsShipped", js: "StarLevelCropsShipped", typ: "" },
        { json: "StoneGathered", js: "StoneGathered", typ: "" },
        { json: "QuestsCompleted", js: "QuestsCompleted", typ: "" },
        { json: "FishCaught", js: "FishCaught", typ: "" },
        { json: "NotesFound", js: "NotesFound", typ: "" },
        { json: "SticksChopped", js: "SticksChopped", typ: "" },
        { json: "WeedsEliminated", js: "WeedsEliminated", typ: "" },
        { json: "DaysPlayed", js: "DaysPlayed", typ: "" },
        { json: "BouldersCracked", js: "BouldersCracked", typ: "" },
        { json: "MysticStonesCrushed", js: "MysticStonesCrushed", typ: "" },
        { json: "GoatCheeseMade", js: "GoatCheeseMade", typ: "" },
        { json: "CheeseMade", js: "CheeseMade", typ: "" },
        { json: "PiecesOfTrashRecycled", js: "PiecesOfTrashRecycled", typ: "" },
        { json: "PreservesMade", js: "PreservesMade", typ: "" },
        { json: "BeveragesMade", js: "BeveragesMade", typ: "" },
        { json: "BarsSmelted", js: "BarsSmelted", typ: "" },
        { json: "IridiumFound", js: "IridiumFound", typ: "" },
        { json: "GoldFound", js: "GoldFound", typ: "" },
        { json: "CoinsFound", js: "CoinsFound", typ: "" },
        { json: "CoalFound", js: "CoalFound", typ: "" },
        { json: "IronFound", js: "IronFound", typ: "" },
        { json: "CopperFound", js: "CopperFound", typ: "" },
        { json: "CaveCarrotsFound", js: "CaveCarrotsFound", typ: "" },
        { json: "OtherPreciousGemsFound", js: "OtherPreciousGemsFound", typ: "" },
        { json: "PrismaticShardsFound", js: "PrismaticShardsFound", typ: "" },
        { json: "DiamondsFound", js: "DiamondsFound", typ: "" },
        { json: "MonstersKilled", js: "MonstersKilled", typ: "" },
        { json: "StepsTaken", js: "StepsTaken", typ: "" },
        { json: "StumpsChopped", js: "StumpsChopped", typ: "" },
        { json: "TimesFished", js: "TimesFished", typ: "" },
        { json: "AverageBedtime", js: "AverageBedtime", typ: "" },
        { json: "TimesUnconscious", js: "TimesUnconscious", typ: "" },
        { json: "GiftsGiven", js: "GiftsGiven", typ: "" },
        { json: "DirtHoed", js: "DirtHoed", typ: "" },
        { json: "RocksCrushed", js: "RocksCrushed", typ: "" },
        { json: "TrufflesFound", js: "TrufflesFound", typ: "" },
        { json: "SheepWoolProduced", js: "SheepWoolProduced", typ: "" },
        { json: "RabbitWoolProduced", js: "RabbitWoolProduced", typ: "" },
        { json: "GoatMilkProduced", js: "GoatMilkProduced", typ: "" },
        { json: "CowMilkProduced", js: "CowMilkProduced", typ: "" },
        { json: "DuckEggsLayed", js: "DuckEggsLayed", typ: "" },
        { json: "ItemsCrafted", js: "ItemsCrafted", typ: "" },
        { json: "ChickenEggsLayed", js: "ChickenEggsLayed", typ: "" },
        { json: "ItemsCooked", js: "ItemsCooked", typ: "" },
        { json: "ItemsShipped", js: "ItemsShipped", typ: "" },
        { json: "SeedsSown", js: "SeedsSown", typ: "" },
        { json: "IndividualMoneyEarned", js: "IndividualMoneyEarned", typ: "" },
    ], false),
    "StatDictionary": o([
        { json: "item", js: "item", typ: a(r("StatDictionaryItem")) },
    ], false),
    "StatDictionaryItem": o([
        { json: "key", js: "key", typ: r("Mailbox") },
        { json: "value", js: "value", typ: r("MischievousValue") },
    ], false),
    "MischievousValue": o([
        { json: "unsignedInt", js: "unsignedInt", typ: "" },
    ], false),
    "SpecialOrders": o([
        { json: "SpecialOrder", js: "SpecialOrder", typ: r("SpecialOrdersSpecialOrder") },
    ], false),
    "SpecialOrdersSpecialOrder": o([
        { json: "preSelectedItems", js: "preSelectedItems", typ: r("PreSelectedItems") },
        { json: "selectedRandomElements", js: "selectedRandomElements", typ: r("PreSelectedItems") },
        { json: "objectives", js: "objectives", typ: a(r("SpecialOrderObjective")) },
        { json: "generationSeed", js: "generationSeed", typ: "" },
        { json: "seenParticipantsIDs", js: "seenParticipantsIDs", typ: r("ParticipantsIDs") },
        { json: "participantsIDs", js: "participantsIDs", typ: r("ParticipantsIDs") },
        { json: "unclaimedRewardsIDs", js: "unclaimedRewardsIDs", typ: "" },
        { json: "appliedSpecialRules", js: "appliedSpecialRules", typ: "" },
        { json: "rewards", js: "rewards", typ: a(r("Reward")) },
        { json: "questKey", js: "questKey", typ: "" },
        { json: "questName", js: "questName", typ: "" },
        { json: "questDescription", js: "questDescription", typ: "" },
        { json: "requester", js: "requester", typ: "" },
        { json: "orderType", js: "orderType", typ: "" },
        { json: "specialRule", js: "specialRule", typ: "" },
        { json: "readyForRemoval", js: "readyForRemoval", typ: "" },
        { json: "itemToRemoveOnEnd", js: "itemToRemoveOnEnd", typ: "" },
        { json: "dueDate", js: "dueDate", typ: "" },
        { json: "duration", js: "duration", typ: "" },
        { json: "questState", js: "questState", typ: "" },
    ], false),
    "SpecialOrderObjective": o([
        { json: "currentCount", js: "currentCount", typ: "" },
        { json: "maxCount", js: "maxCount", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "failOnCompletion", js: "failOnCompletion", typ: "" },
        { json: "acceptableContextTagSets", js: "acceptableContextTagSets", typ: "" },
        { json: "useShipmentValue", js: "useShipmentValue", typ: u(undefined, "") },
    ], false),
    "ParticipantsIDs": o([
        { json: "item", js: "item", typ: r("ParticipantsIDsItem") },
    ], false),
    "ParticipantsIDsItem": o([
        { json: "key", js: "key", typ: r("OwnerUIDClass") },
        { json: "value", js: "value", typ: r("SleptInTemporaryBed") },
    ], false),
    "CurrentSeason": [
        "fall",
        "spring",
        "summer",
        "winter",
    ],
    "DishOfTheDayType": [
        "Basic",
        "Cooking",
        "Crafting",
        "Fish",
        "Minerals",
        "Seeds",
    ],
    "BuildingTypeILiveIn": [
        "Barn",
        "Coop",
    ],
    "ToolUsedForHarvest": [
        "Milk Pail",
        "null",
        "Shears",
    ],
    "SpecialChestType": [
        "MiniShippingBin",
        "None",
    ],
    "MiniJukeboxTrack": [
        "",
        "playful",
    ],
    "PurpleType": [
        "asdf",
        "Basic",
        "Crafting",
        "interactive",
    ],
    "Status": [
        "Friendly",
    ],
};
