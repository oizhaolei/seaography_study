//! `SeaORM` Entity, @generated by sea-orm-codegen 1.1.4

use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Eq)]
#[sea_orm(table_name = "cake")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub name: String,
    #[sea_orm(column_type = "Decimal(Some((16, 4)))")]
    pub price: Decimal,
    pub bakery_id: i32,
    pub gluten_free: bool,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::bakery::Entity",
        from = "Column::BakeryId",
        to = "super::bakery::Column::Id",
        on_update = "Cascade",
        on_delete = "Cascade"
    )]
    Bakery,
    #[sea_orm(has_many = "super::cake_baker::Entity")]
    CakeBaker,
}

impl Related<super::bakery::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Bakery.def()
    }
}

impl Related<super::cake_baker::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::CakeBaker.def()
    }
}

impl Related<super::baker::Entity> for Entity {
    fn to() -> RelationDef {
        super::cake_baker::Relation::Baker.def()
    }
    fn via() -> Option<RelationDef> {
        Some(super::cake_baker::Relation::Cake.def().rev())
    }
}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelatedEntity)]
pub enum RelatedEntity {
    #[sea_orm(entity = "super::bakery::Entity")]
    Bakery,
    #[sea_orm(entity = "super::cake_baker::Entity")]
    CakeBaker,
    #[sea_orm(entity = "super::baker::Entity")]
    Baker,
}