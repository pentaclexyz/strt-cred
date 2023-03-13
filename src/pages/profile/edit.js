import React, { useState, useEffect, Fragment } from "react";
import { NextSeo } from "next-seo";
import Header from "../../components/layouts/Header";
import { twitterUserInfoState } from "../../providers/Twitter";
import { useRecoilValue } from "recoil";
import { ensNameState } from "../../providers/Ens";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import SkillSelect from "../../components/profile/SkillSelect";
import SubSkillSelect from "../../components/profile/SubSkillSelect";

export default function Profile({ categories }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const userInfo = useRecoilValue(twitterUserInfoState);
  const ensName = useRecoilValue(ensNameState);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [subCategories, setSubCategories] = useState({});
  useEffect(() => {
    (async () => {
      if (!ensName) {
        await router.push("/");
      }
      setMounted(true);
    })();
  }, [ensName, router]);

  useEffect(() => {
    const transformed = selectedCategories.reduce(
      (acc, curr) => ({ [curr.name]: [], ...acc }),
      {}
    );
    setSubCategories(transformed);
  }, [selectedCategories]);


  const bio = "Semi-retired derivatives trader.";
  const githubId = "cdartttt";
  const twitterId = "cdartttt";
  const blog = "cdartttt.substack.com";
  const website = "cdartttt.com";

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <NextSeo
        title={`${userInfo.name} . STRT CRED `}
        description={`${userInfo.name} is on STRT CRED `}
      />
      <Header />

      <section className={"text-xs"}>
        <div className={"p-8 text-center bg-highlight"}>
          <h1>Pentacle doing Monday</h1>
        </div>

        <article
          className={
            "flex flex-row justify-between items-center px-4 py-4 border-b border-primary"
          }
        >
          <div className={"flex gap-x-4 items-center"}>
            <div>
              <img
                className={"w-20 h-20 rounded-full"}
                src={`${userInfo.profileImage.replace("_normal", "_bigger")}`}
              />
            </div>
            <div className={"flex flex-col gap-y-2"}>
              <div>@{userInfo.name}</div>
              <div>{bio}</div>
            </div>
          </div>
          <div className={"flex gap-x-4"}>
            <div className={"flex gap-x-4"}>
              {twitterId && (
                <div>
                  <a href={`https://twitter.com/${twitterId}`}>@{twitterId}</a>
                </div>
              )}
              {githubId && (
                <div>
                  <a href={`https://github.com/${githubId}`}>github</a>
                </div>
              )}
              {blog && (
                <div>
                  <a href={`https://${blog}`}>blog</a>
                </div>
              )}
              {website && (
                <div>
                  <a href={`https://${website}`}>website</a>
                </div>
              )}
            </div>
          </div>
        </article>

        <section className={"grid grid-cols-12 border-b border-primary"}>
          {step === 1 ? (
            <>
              <div className="col-span-8 col-start-3 border-x border-primary">
                <h3 className="col-span-12 mt-3 mb-6 text-2xl text-center">
                  Select your skills
                </h3>
                <SkillSelect
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  categories={categories}
                />
              </div>
              {selectedCategories.length > 0 ? (
                <div className="flex flex-row col-span-8 col-start-3 justify-end p-4 border-t border-x border-primary">
                  <Button onClick={() => setStep(2)}>Continue</Button>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {step === 2 ? (
            <>
              <div className="col-span-8 col-start-3 border-x border-primary">
                <h3 className="col-span-12 mt-3 mb-6 text-2xl text-center">
                  Select your SubSkills
                </h3>
                {selectedCategories.map((category) => {
                    return <SubSkillSelect  subCategories={subCategories} setSubCategories={setSubCategories} category={category}  />
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </section>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const categories = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/categories`)
  ).json();
  return {
    props: { categories },
  };
}